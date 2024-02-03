import { ref } from 'vue'

const useDraggable = () => {
    const position = ref({
        x: 0,
        y: 0
    })
    const setElementPosition = (element, x, y) => {
        element.style.top = `${y}px`
        element.style.left = `${x}px`
    }
    const vDraggable = {
        mounted(element, binding, vNode) {
            const draggable = binding.value?.draggable || true
            const scrollableWrapper = document.querySelector(`${binding.value?.scrollableParentElement}`) || document.body
            const parentElement = document.querySelector(`${binding.value?.parentElement}`) || document.body
            const parentStyleInformation = parentElement.getBoundingClientRect()
            const boundaryOffset = binding.value?.boundaryOffset
            const boundary = binding.value?.boundary
            let boundaryOffsetX = boundary 
                                    ? (
                                        boundaryOffset?.x || (boundaryOffset && typeof boundaryOffset != Object) 
                                        ? boundaryOffset.x
                                        : 0
                                    ) 
                                    : 0
            let boundaryOffsetY = boundary 
                                    ? (
                                        boundaryOffset?.y || (boundaryOffset && typeof boundaryOffset != Object) 
                                        ? boundaryOffset.y
                                        : 0
                                    ) 
                                    : 0

            position.value.x = binding.value?.x || 0
            position.value.y = binding.value?.y || 0
            
            parentElement.style.position = 'relative'
            element.style.userSelect = 'none'
            element.style.position = 'absolute'
            let mouseDownPosition = {
                top: 0,
                left: 0
            }
            
            // initial position for draggable element start
            setElementPosition(
                element, 
                (position.value?.x || 0) + boundaryOffsetX, 
                (position.value?.y || 0) + boundaryOffsetY
            )
            // initial position for draggable element end



            const _getBoundary = ({position, offset, widthOrHeight}) => {
                return position < (0 + offset) ? (0 + offset)
                            : position > (widthOrHeight - offset)
                            ? (widthOrHeight - offset) 
                            : position
            }

            const calculateThePosition = (event) => {
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
              
                position.value.x = newX
                position.value.y = newY
                setElementPosition(element, newX, newY)
            }
              
            let isMouseDown = false
            let isMouseMove = false
            element.onmousedown = function(event) {
                if(!draggable) return
                const targetInformation = event.target.getBoundingClientRect()
                isMouseDown = true
                mouseDownPosition.top = event.y - targetInformation.y
                mouseDownPosition.left = event.x - targetInformation.x
                if(binding.value?.onDragStart){
                    binding.value.onDragStart(position.value)
                }
            }
            document.addEventListener('mousemove', (event) => {
                if(isMouseDown) {
                    isMouseMove = true

                    calculateThePosition(event)
                    
                    if(binding.value?.onDragging){
                        binding.value.onDragging(position.value)
                    }
                }
            })

            document.addEventListener('mouseup', function() {
                if(!isMouseDown) return
                isMouseDown = false
                if(isMouseMove){
                    if(binding.value?.afterDragEnd){
                        binding.value.afterDragEnd(position.value)
                    }
                }

            })
            
        },
        unmounted() {
            window.removeEventListener('mousemove', () => {})
        }
    }

    return {
        vDraggable,
        position
    }
}

export default useDraggable