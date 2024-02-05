export const _getBoundary = ({ position, offset, widthOrHeight }) => {
  return position < 0 + offset
    ? 0 + offset
    : position > widthOrHeight - offset
    ? widthOrHeight - offset
    : position
}

export const _calculateThePosition = (event) => {
  const { clientX: x, clientY: y } =
    (event.targetTouches && event.targetTouches[0]) || event
  const { left, top, width, height } =
    config.value.elementInfo.boundaryElementStyleInformation
  const { left: mDownLeft, top: mDownTop } = config.value.mouseDownPosition
  const { scrollLeft, scrollTop } = config.value.elementInfo.scrollableWrapper
  let newX = x - left - mDownLeft + scrollLeft
  let newY = y - top - mDownTop + scrollTop

  // setting boundary for x and y
  if (config.value.elementInfo.boundary) {
    const parentWidth = width - config.value.element.offsetWidth
    const parentHeight = height - config.value.element.offsetHeight

    newX = _getBoundary({
      position: newX,
      offset: config.value.boundaryOffsetX,
      widthOrHeight: parentWidth,
    })

    newY = _getBoundary({
      position: newY,
      offset: config.value.boundaryOffsetY,
      widthOrHeight: parentHeight,
    })
  }

  config.value.position.x = newX
  config.value.position.y = newY

  setElementPosition(config.value.element, newX, newY)
}

export const _dragStart = (event) => {
  if (!config.value.draggable) return
  const targetInformation = event.target.getBoundingClientRect()
  config.value.isMouseDown = true

  const { clientX, clientY } =
    (event.targetTouches && event.targetTouches[0]) || event
  config.value.mouseDownPosition.top = clientY - targetInformation.y
  config.value.mouseDownPosition.left = clientX - targetInformation.x
  if (config.value.binding.value?.onDragStart) {
    config.value.binding.value.onDragStart(config.value.position)
  }
}

export const _handleMouseMove = (event) => {
  event.preventDefault()
  if (config.value.isMouseDown) {
    config.value.isMouseMove = true
    _calculateThePosition(event)
    if (config.value.binding.value?.onDragging) {
      config.value.binding.value.onDragging(config.value.position)
    }
  }
}

export const _handleMouseUp = () => {
  if (!config.value.isMouseDown) return
  config.value.isMouseDown = false

  if (config.value.isMouseMove) {
    if (config.value.binding.value?.afterDragEnd) {
      config.value.binding.value.afterDragEnd(config.value.position)
    }
  }
}
