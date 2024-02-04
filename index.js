import { ref } from 'vue'
const config = ref({
    element: null,
    binding: null,
    vNode: null,
    isMouseDown: false,
    isMouseMove: false,
    position: {
        x: 0,
        y: 0
    },
    calculateThePosition: () => {}
})
const useDraggable = () => {
    const setElementPosition = (element, x, y) => {
        element.style.top = `${y}px`
        element.style.left = `${x}px`
    }
    const vDraggable = {
        mounted(element, binding, vNode) {
            config.value.element = element
            config.value.binding = binding,
            config.value.vNode = vNode

            const draggable = config.value.binding.value?.draggable || true
            const scrollableWrapper = document.querySelector(`${config.value.binding.value?.scrollableParentElement}`) || document.body
            const boundaryElement = document.querySelector(`${config.value.binding.value?.boundaryElement}`) || document.body
            const parentStyleInformation = boundaryElement.getBoundingClientRect()
            const boundaryOffset = config.value.binding.value?.boundaryOffset
            const boundary = config.value.binding.value?.boundary
            let boundaryOffsetX = boundary 
                                    ? (
                                        boundaryOffset?.x || (boundaryOffset && typeof boundaryOffset != Object) 
                                        ? boundaryOffset
                                        : 0
                                    ) 
                                    : 0
            let boundaryOffsetY = boundary 
                                    ? (
                                        boundaryOffset?.y || (boundaryOffset && typeof boundaryOffset != Object) 
                                        ? boundaryOffset
                                        : 0
                                    ) 
                                    : 0

            config.value.position.x = config.value.binding.value?.x || 0
            config.value.position.y = config.value.binding.value?.y || 0
            
            boundaryElement.style.position = 'relative'
            config.value.element.style.userSelect = 'none'
            config.value.element.style.position = 'absolute'
            let mouseDownPosition = {
                top: 0,
                left: 0
            }
            
            // initial position for draggable element start
            setElementPosition(
                config.value.element, 
                (config.value.position?.x || 0) + boundaryOffsetX, 
                (config.value.position?.y || 0) + boundaryOffsetY
            )
            // initial position for draggable element end



            const _getBoundary = ({position, offset, widthOrHeight}) => {
                return position < (0 + offset) ? (0 + offset)
                            : position > (widthOrHeight - offset)
                            ? (widthOrHeight - offset) 
                            : position
            }

            config.value.calculateThePosition = (event) => {
                console.log(config.value.element.offsetTop)
                const { x, y } = event
                const { left, top, width, height } = parentStyleInformation
                const { left: mDownLeft, top: mDownTop } = mouseDownPosition
                const { scrollLeft, scrollTop } = scrollableWrapper
                let newX = (x - left) - mDownLeft + scrollLeft
                let newY = (y - top) - mDownTop + scrollTop
                
                // setting boundary for x and y
                if (boundary) 
                {
                    const parentWidth = width - element.offsetWidth
                    const parentHeight = height - element.offsetHeight

                    newX = _getBoundary({
                        position: newX,
                        offset: boundaryOffsetX,
                        widthOrHeight: parentWidth
                    })

                    newY = _getBoundary({
                        position: newY,
                        offset: boundaryOffsetY,
                        widthOrHeight: parentHeight
                    })
                }
              
                config.value.position.x = newX
                config.value.position.y = newY
                setElementPosition(element, newX, newY)
            }
              
            config.value.element.onmousedown = function(event) {
                if(!draggable) return
                const targetInformation = event.target.getBoundingClientRect()
                config.value.isMouseDown = true
                mouseDownPosition.top = event.y - targetInformation.y
                mouseDownPosition.left = event.x - targetInformation.x
                if(config.value.binding.value?.onDragStart){
                    config.value.binding.value.onDragStart(config.value.position)
                }
            }
            document.addEventListener('mousemove', _handleMouseMove)

            document.addEventListener('mouseup', function() {
                if(!config.value.isMouseDown) return
                config.value.isMouseDown = false
                
                if(config.value.isMouseMove){
                    if(config.value.binding.value?.afterDragEnd){
                        config.value.binding.value.afterDragEnd(config.value.position)
                    }
                }

            })
            
        },
        unmounted() {
            window.removeEventListener('mousemove', _handleMouseMove)
        }
    }
        
    const _handleMouseMove = function(event) {
        if(config.value.isMouseDown) {
            config.value.isMouseMove = true
            config.value.calculateThePosition(event)
            if(config.value.binding.value?.onDragging){
                config.value.binding.value.onDragging(config.value.position)
            }
        }
    }

    return {
        vDraggable,
        position: config.value.position
    }
}

export default useDraggable