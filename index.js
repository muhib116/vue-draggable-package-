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
            if(binding.value.draggable == undefined) {
                binding.value.draggable = true
            }
            
            const positionInformation = element.getBoundingClientRect()
            const scrollableWrapper = document.querySelector(`.${binding.value.scrollableWrapperClass}`) || document.body
            const parentClass = document.querySelector(`.${binding.value.parentClass}`) || document.body
            const parentStyleInformation = parentClass.getBoundingClientRect()
            position.value.x = binding.value.x
            position.value.y = binding.value.y
            element.style.userSelect = 'none'
            let mouseDownPosition = {
                top: 0,
                left: 0
            }
            
            setElementPosition(element, position.value.x, position.value.y)

            let isMouseDown = false
            let isMouseMove = false
            element.onmousedown = function(event) {
                if(!binding.value.draggable) return
                const targetInformation = event.target.getBoundingClientRect()
                isMouseDown = true
                mouseDownPosition.top = event.y - targetInformation.y
                mouseDownPosition.left = event.x - targetInformation.x
                if(binding.value.onDragStart){
                    binding.value.onDragStart(position.value)
                }
            }

            const calculateThePosition = (event) => {
                const { x, y } = event
                const { left, top, width, height } = parentStyleInformation
                const { left: mDownLeft, top: mDownTop } = mouseDownPosition
                const { scrollLeft, scrollTop } = scrollableWrapper
                let newX = (x - left) - mDownLeft + scrollLeft
                let newY = (y - top) - mDownTop + scrollTop
              
                if (binding.value.boundary) {
                  // calculate x value start
                  const parentWidth = width - element.offsetWidth / 2
                  newX = Math.min(Math.max(newX, -element.offsetWidth / 2), parentWidth)
              
                  // calculate y value start
                  const parentHeight = height - element.offsetHeight / 2
                  newY = Math.min(Math.max(newY, -element.offsetHeight / 2), parentHeight)
                }
              
                position.value.x = newX
                position.value.y = newY
                setElementPosition(element, newX, newY)
            }
              
            document.addEventListener('mousemove', (event) => {
                if(isMouseDown) {
                    isMouseMove = true

                    calculateThePosition(event)
                    
                    if(binding.value.onDragging){
                        binding.value.onDragging(position.value)
                    }
                }
            })

            document.addEventListener('mouseup', function() {
                if(!isMouseDown) return
                isMouseDown = false
                if(isMouseMove){
                    if(binding.value.afterDragEnd){
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