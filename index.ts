import { ref, Ref, onUnmounted, onMounted } from 'vue';

interface ElementInfo {
  boundaryElement: HTMLElement | null;
  scrollableWrapper: HTMLElement | null;
  boundaryElementStyleInformation: DOMRect | null;
  boundaryOffset: number | null;
}

interface MouseDownPosition {
  top: number;
  left: number;
}

interface Position {
  x: number;
  y: number;
}

interface DraggableConfig {
  elementInfo: ElementInfo;
  draggable: boolean;
  element: HTMLElement | null;
  binding: any; // Replace 'any' with the actual type of your binding
  vNode: any; // Replace 'any' with the actual type of your vNode
  isMouseDown: boolean;
  isMouseMove: boolean;
  mouseDownPosition: MouseDownPosition;
  position: Position;
  boundaryOffsetX: number;
  boundaryOffsetY: number;
}

const createConfig = (): DraggableConfig => ({
  elementInfo: {
    boundaryElement: null,
    scrollableWrapper: null,
    boundaryElementStyleInformation: null,
    boundaryOffset: null,
  },
  draggable: true,
  element: null,
  binding: null,
  vNode: null,
  isMouseDown: false,
  isMouseMove: false,
  mouseDownPosition: {
    top: 0,
    left: 0,
  },
  position: {
    x: 0,
    y: 0,
  },
  boundaryOffsetX: 0,
  boundaryOffsetY: 0,
});

const setElementPosition = (element: HTMLElement, x: number, y: number): void => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const getBoundary = ({ position, offset, widthOrHeight }: { position: number; offset: number; widthOrHeight: number }): number => {
  return position < 0 + offset
    ? 0 + offset
    : position > widthOrHeight - offset
    ? widthOrHeight - offset
    : position;
};

const calculateThePosition = (event: TouchEvent | MouseEvent, config: DraggableConfig): void => {
  const { clientX: x, clientY: y } = 'touches' in event ? (event.touches && event.touches[0]) || event : event;
  const { left, top, width, height } = config.elementInfo.boundaryElementStyleInformation!;
  const { left: mDownLeft, top: mDownTop } = config.mouseDownPosition;
  const { scrollLeft, scrollTop } = config.elementInfo.scrollableWrapper!;
  let newX = x - left - mDownLeft + scrollLeft;
  let newY = y - top - mDownTop + scrollTop;

  if (config.elementInfo.boundary) {
    const parentWidth = width! - config.element!.offsetWidth;
    const parentHeight = height! - config.element!.offsetHeight;

    newX = getBoundary({
      position: newX,
      offset: config.boundaryOffsetX,
      widthOrHeight: parentWidth,
    });

    newY = getBoundary({
      position: newY,
      offset: config.boundaryOffsetY,
      widthOrHeight: parentHeight,
    });
  }

  config.position.x = newX;
  config.position.y = newY;

  setElementPosition(config.element!, newX, newY);
};

const dragStart = (event: TouchEvent | MouseEvent, config: DraggableConfig): void => {
  if (!config.draggable) return;
  const targetInformation = config.element!.getBoundingClientRect();
  config.isMouseDown = true;

  const { clientX, clientY } = 'touches' in event ? (event.touches && event.touches[0]) || event : event;
  config.mouseDownPosition.top = clientY - targetInformation.y;
  config.mouseDownPosition.left = clientX - targetInformation.x;
  if (config.binding.value?.onDragStart) {
    config.binding.value.onDragStart(config.position);
  }
};

const handleMouseMove = (event: TouchEvent | MouseEvent, config: DraggableConfig): void => {
  event.preventDefault();
  if (config.isMouseDown) {
    config.isMouseMove = true;
    calculateThePosition(event, config);
    if (config.binding.value?.onDragging) {
      config.binding.value.onDragging(config.position);
    }
  }
};

const handleMouseUp = (config: DraggableConfig): void => {
  if (!config.isMouseDown) return;
  config.isMouseDown = false;

  if (config.isMouseMove) {
    if (config.binding.value?.afterDragEnd) {
      config.binding.value.afterDragEnd(config.position);
    }
  }
};

const useDraggable = (): { vDraggable: Record<string, () => void>; position: Ref<Position> } => {
  const config = ref(createConfig());

  const vDraggable = {
    mounted(element: HTMLElement, binding: any, vNode: any): void {
      config.value.element = element;
      config.value.binding = binding;
      config.value.vNode = vNode;

      config.value.draggable = config.value.binding.value?.draggable || true;
      config.value.elementInfo.scrollableWrapper =
        document.querySelector(`${config.value.binding.value?.scrollableParentElement}`) || document.body;
      config.value.elementInfo.boundaryElement =
        document.querySelector(`${config.value.binding.value?.boundaryElement}`) || document.body;
      config.value.elementInfo.boundaryElementStyleInformation = config.value.elementInfo.boundaryElement!.getBoundingClientRect();
      config.value.elementInfo.boundaryOffset = config.value.binding.value?.boundaryOffset;
      config.value.elementInfo.boundary = config.value.binding.value?.boundary;

      config.value.boundaryOffsetX = config.value.elementInfo.boundary
        ? typeof config.value.elementInfo.boundaryOffset === 'object'
          ? config.value.elementInfo.boundaryOffset?.x
          : config.value.elementInfo.boundaryOffset
        : 0;
      config.value.boundaryOffsetY = config.value.elementInfo.boundary
        ? typeof config.value.elementInfo.boundaryOffset === 'object'
          ? config.value.elementInfo.boundaryOffset?.y
          : config.value.elementInfo.boundaryOffset
        : 0;

      config.value.position.x = config.value.binding.value?.x || 0;
      config.value.position.y = config.value.binding.value?.y || 0;

      config.value.elementInfo.boundaryElement!.style.position = 'relative';
      config.value.element!.style.userSelect = 'none';
      config.value.element!.style.position = 'absolute';

      setElementPosition(
        config.value.element!,
        (config.value.position?.x || 0) + config.value.boundaryOffsetX,
        (config.value.position?.y || 0) + config.value.boundaryOffsetY
      );

      config.value.element!.addEventListener('mousedown', (event) => dragStart(event, config.value));
      config.value.element!.addEventListener('touchstart', (event) => dragStart(event, config.value));

      document.addEventListener('mousemove', (event) => handleMouseMove(event, config.value));
      document.addEventListener('touchmove', (event) => handleMouseMove(event, config.value));

      document.addEventListener('mouseup', () => handleMouseUp(config.value));
      document.addEventListener('touchend', () => handleMouseUp(config.value));

      onUnmounted(() => {
        config.value.element!.removeEventListener('mousedown', (event) => dragStart(event, config.value));
        window.removeEventListener('mousemove', (event) => handleMouseMove(event, config.value));
      });
    },
  };

  return {
    vDraggable,
    position: ref({ x: 0, y: 0 }),
  };
};

export default useDraggable;