import { ref } from 'vue'

const useDraggable = () => {
  const createConfig = () => {
    return {
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
    }
  }

  const setElementPosition = (element, x, y) => {
    element.style.top = `${y}px`
    element.style.left = `${x}px`
  }

  const vDraggable = {
    mounted(element, binding, vNode) {
      const config = createConfig()

      config.element = element
      config.binding = binding
      config.vNode = vNode

      config.draggable =
        config.binding.value?.draggable || true
      config.elementInfo.scrollableWrapper =
        document.querySelector(
          `${config.binding.value?.scrollableParentElement}`
        ) || document.body
      config.elementInfo.boundaryElement =
        document.querySelector(`${config.binding.value?.boundaryElement}`) ||
        document.body
      config.elementInfo.boundaryElementStyleInformation =
        config.elementInfo.boundaryElement.getBoundingClientRect()
      config.elementInfo.boundaryOffset =
        config.binding.value?.boundaryOffset
      config.elementInfo.boundary =
        config.binding.value?.boundary

      config.boundaryOffsetX = config.elementInfo.boundary
        ? typeof config.elementInfo.boundaryOffset === 'object'
          ? config.elementInfo.boundaryOffset?.x
          : config.elementInfo.boundaryOffset
        : 0
      config.boundaryOffsetY = config.elementInfo.boundary
        ? typeof config.elementInfo.boundaryOffset === 'object'
          ? config.elementInfo.boundaryOffset?.y
          : config.elementInfo.boundaryOffset
        : 0

      config.position.x = config.binding.value?.x || 0
      config.position.y = config.binding.value?.y || 0

      config.elementInfo.boundaryElement.style.position = 'relative'
      config.element.style.userSelect = 'none'
      config.element.style.position = 'absolute'

      // initial position for draggable element start
      setElementPosition(
        config.element,
        (config.position?.x || 0) + config.boundaryOffsetX,
        (config.position?.y || 0) + config.boundaryOffsetY
      )
      // initial position for draggable element end

      config.element.addEventListener('mousedown', (event) => _dragStart(event, config))
      config.element.addEventListener('touchstart', (event) => _dragStart(event, config))

      document.addEventListener('mousemove', (event) => _handleMouseMove(event, config))
      document.addEventListener('touchmove', (event) => _handleMouseMove(event, config))

      document.addEventListener('mouseup', () => _handleMouseUp(config))
      document.addEventListener('touchend', () => _handleMouseUp(config))
    },
    unmounted(config) {
      config.element.removeEventListener('mousedown', _dragStart)
      window.removeEventListener('mousemove', _handleMouseMove, {passive: false})
    },
  }

  const _getBoundary = ({ position, offset, widthOrHeight }) => {
    return position < 0 + offset
      ? 0 + offset
      : position > widthOrHeight - offset
      ? widthOrHeight - offset
      : position
  }

  const _calculateThePosition = (event, config) => {
    const { clientX: x, clientY: y } =
      event.targetTouches && event.targetTouches[0] || event
    const { left, top, width, height } =
      config.elementInfo.boundaryElementStyleInformation
    const { left: mDownLeft, top: mDownTop } = config.mouseDownPosition
    const { scrollLeft, scrollTop } = config.elementInfo.scrollableWrapper
    let newX = x - left - mDownLeft + scrollLeft
    let newY = y - top - mDownTop + scrollTop

    // setting boundary for x and y
    if (config.elementInfo.boundary) {
      const parentWidth = width - config.element.offsetWidth
      const parentHeight = height - config.element.offsetHeight

      newX = _getBoundary({
        position: newX,
        offset: config.boundaryOffsetX,
        widthOrHeight: parentWidth,
      })

      newY = _getBoundary({
        position: newY,
        offset: config.boundaryOffsetY,
        widthOrHeight: parentHeight,
      })
    }

    config.position.x = newX
    config.position.y = newY

    setElementPosition(config.element, newX, newY)
  }

  const _dragStart = (event, config) => {
    if (!config.draggable) return
    const targetInformation = event.target.getBoundingClientRect()
    config.isMouseDown = true

    const { clientX, clientY } =
      event.targetTouches && event.targetTouches[0] || event
    config.mouseDownPosition.top = clientY - targetInformation.y
    config.mouseDownPosition.left = clientX - targetInformation.x
    if (config.binding.value?.onDragStart) {
      config.binding.value.onDragStart(config.position)
    }
  }

  const _handleMouseMove = (event, config) => {
    if (config.isMouseDown) {
      config.isMouseMove = true
      _calculateThePosition(event, config)
      if (config.binding.value?.onDragging) {
        config.binding.value.onDragging(config.position)
      }
    }
  }

  const _handleMouseUp = (config) => {
    if (!config.isMouseDown) return
    config.isMouseDown = false

    if (config.isMouseMove) {
      if (config.binding.value?.afterDragEnd) {
        config.binding.value.afterDragEnd(config.position)
      }
    }
  }

  return {
    vDraggable,
    position: ref({ x: 0, y: 0 }),
  }
}

export default useDraggable