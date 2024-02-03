
# vue3 draggable anywhere
## Project Overview
`vue-draggable-anywhere` is a Vue.js package supported by Vue3 that enables draggable behavior for HTML elements. It provides an easy-to-use directive to make any element draggable within a specified boundary.

  

## Installation
To use this package in your Vue.js project, you need to install it using npm. Run the following command in your terminal:

```bash
npm  install  vue-draggable-anywhere
```
  
  

## Usage
To  make  an  element  draggable,  use  the  v-draggable  directive  on  the  desired  HTML  element.  Below  is  an  example  of  how  to  use  it:

  ```html
<template>
	<div  style="height: 400px; width: 100%;background: cornflowerblue;">
		<p>{{ position }}</p>
		<h1
			v-draggable
			style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
		>
			Move
		</h1>
	</div>
</template>
```
  
```javascript
<script  setup>
	import useDraggable from  'vue-draggable-anywhere'

	const { vDraggable, position } =  useDraggable()
</script>
```


### Example with configuration
  ```html
<template>
		<div  class="parentClass"  style="height: 400px; width: 400px; margin: 20px; background: cornflowerblue;">
		<p>{{ position }}</p>
		<h1
			v-draggable="configuration"
			style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
		>
			Move
		</h1>
	</div>
</template>
```

```javascript
<script  setup>
	import useDraggable from  'vue-draggable-anywhere'
	
	const { vDraggable, position } =  useDraggable()
	const  configuration  = {
		parentElement: '.parentClass',
		boundary: true,
		boundaryOffset: {
			x: -20,
			y: 30
		},
		onDragging: test,
		afterDragEnd: test
	}

	function  test(position) {
		console.log(position)
	}
</script>
```

## Configuration (all the properties are optional)

- **x**
  - Type: Number
  - Default: `0`
  - Description: Initial x position
- **y**
  - Type: Boolean
  - Default: `0`
  - Description: Initial y position
##### *initial x and y value also depend on offset*

- **draggable**
  - Type: Boolean
  - Default: `true`
  - Description: Set to `false` to disable dragging.

- **boundary**
  - Type: Boolean
  - Default: `false`
  - Description: Set to `true` to define a boundary for the draggable element.

- **boundaryOffset**
  - Type: Number/Object
  - Default: `0`
  - Description: Define the offset amount of the draggable element outside/inside the boundary. for outer offset set negative value.
  - **Note:** `boundaryOffset` not work if `boundary` set to false
  - Example: ``
  boundaryOffset: 0 or boundaryOffset: {x: 20, y: -40}
  ``

- **parentClass**
  - Type: String
  - Default: None
  - Description: Class name of the parent element, defining it as the boundary for the draggable element.

- **scrollableWrapperClass**
  - Type: String
  - Default: None
  - Description: Move the draggable element if the parent element is scrollable inside another element without the body element.

- **onDragStart**
  - Type: Function
  - Default: None
  - Description: Functional prop called when drag starts, returns the current position of the draggable element.
  - example: ```onDragStart: yourFunction```

- **onDragging**
  - Type: Function
  - Default: None
  - Description: Functional prop called during dragging, returns the current position of the draggable element.
  - example: ```onDragging: yourFunction```
  
- **afterDragEnd**
  - Type: Function
  - Default: None
  - Description: Functional prop called after the drag ends, returns the current position of the draggable element.
  - example: ```afterDragEnd: yourFunction```