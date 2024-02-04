# vue3 draggable anywhere

## Project Overview

`vue-draggable-anywhere` is a Vue.js package supported by Vue3 that enables draggable behavior for HTML elements. It provides an easy-to-use directive to make any element draggable within a specified boundary.


## Installation

To use this package in your Vue.js project, you need to install it using npm. Run the following command in your terminal:

```bash
npm  install  vue-draggable-anywhere
```

  

## Usage

To make an element draggable, use the v-draggable directive on the desired HTML element. Below is an example of how to use it:

```html
<template>
  <div  style="height: 400px; width: 100%;background: cornflowerblue;">
    <p>{{ position }}</p>
    <button
      v-draggable
      style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
    >
      Move
    </button>
  </div>
</template>
```

```javascript
<script  setup>
  import useDraggable from 'vue-draggable-anywhere'
  const { vDraggable, position } = useDraggable()
</script>
```

  
  

### Example with configuration

```html
<template>
  <div  class="parentClass"  style="height: 400px; width: 400px; margin: 20px; background: cornflowerblue;">
    <p>{{ position }}</p>
    <button
      v-draggable="configuration"
      style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
    >
      Move
    </button>
  </div>
</template>
```

  

```javascript
<script  setup>
  import useDraggable from 'vue-draggable-anywhere'

  const { vDraggable, position } = useDraggable()
  const configuration = {
    boundaryElement: '.parentClass',
    boundary: true,
    boundaryOffset: {
      x: -20,
      y: 30
    },
    onDragging: test,
    afterDragEnd: test
  }

  function test(position) {
    console.log(position)
  }
</script>
```

  

## Properties of Configuration (all the properties are optional)

-  **x**
- Type: Number
- Default: `0`
- Description: Initial x position
-  **y**
- Type: Boolean
- Default: `0`
- Description: Initial y position

##### *initial x and y value also depend on offset*

-  **draggable**
- Type: Boolean
- Default: `true`
- Description: Set to `false` to disable dragging.

-  **boundary**
- Type: Boolean
- Default: `false`
- Description: Set to `true` to define a boundary for the draggable element.

-  **boundaryOffset**
- Type: Number/Object
- Default: `0`
- Description: Define the offset amount of the draggable element outside/inside the boundary. for outer offset set negative value.
-  **Note:**  `boundaryOffset` not work if `boundary` set to false
- Example: ``boundaryOffset: 0 or boundaryOffset: {x: 20, y: -40}``

-  **boundaryElement**
- Type: String
- Default: None
- Description: CSS selector of the boundary element, that contains the draggable element. 
For example code follow this section:  **Example with configuration**

  

-  **scrollableParentElement**
- Type: String
- Default: body element
- Description: CSS selector of the scrollable container, here is an example for better understanding.

*Example Code:*
```html
<template>
  <p>{{ position }}</p>
  <main  class="scrollableParentElement"  style="height: 300px; width: 300px; overflow: auto; background-color: springgreen; padding: 16px;">
    <div  class="boundaryElement"  style="height: 500px; width: 100%; background-color: tomato;">
      <button  v-draggable="configuration"  style="width: 50px; height: 50px; background: white;">
        Move
      </button>
    </div>
  </main>
</template>
```

```js
<script  setup>
	import useDraggable from 'vue-draggable-anywhere'

	const { vDraggable, position } = useDraggable()
  const  configuration  = {
    boundaryElement: '.boundaryElement',
    scrollableParentElement: '.scrollableParentElement',
    boundary: true,
    boundaryOffset: {
      x: 10,
      y: 0
    }
  }
</script>
```

-  **onDragStart**
- Type: Function
- Default: None
- Description: Functional prop called when drag starts, returns the current position of the draggable element.
- example: ```onDragStart: yourFunction```

-  **onDragging**
- Type: Function
- Default: None
- Description: Functional prop called during dragging, returns the current position of the draggable element.
- example: ```onDragging: yourFunction```

-  **afterDragEnd**
- Type: Function
- Default: None
- Description: Functional prop called after the drag ends, returns the current position of the draggable element.
- example: ```afterDragEnd: yourFunction```