![Vue draggable anywhere](https://lh3.googleusercontent.com/fife/AGXqzDmd_CW2-tI634rHC2H-ELEzOXkICRsYSktx4_lp2mchrXcb7OkM8KNrZQEWViypCY5R5kb47mzFdtHCxXKsmS4UEkVQYrPxSZBldYgLY50YdETRIrJRcD01vlPeuOPTs_VjnsboDUah3qCsQIfivqgS8gN1sZQvd7yhyyiN6Dek21fOBJzAiKGD8xtnjXsgkWrwzAS8vrAEGPiqZCmUjvTrmO_oyBA-gTkTsN0VPGuwOqdZXG8XjCZjax5pqUixcRQXgoulMVcHn46-Ukdjf7-8hfvxiKcEFwzAhBVLbVqIdQUBHuu6MHzyuyglc2KEsL5W_w4uVqK0k029Od50ToL7Lg8dA_fmE1hwgjOO2Odpq0JEvrZ1SLj8OFbAUqOsXcMer6zu6IPqRjTsmIxMVGmipG0dedVnvGYEOrJcSp7iLPz8J9Oa3pt0iFNoc0VYk8EYEpUemkSq2hCpFQx6j1Bx1fhhr_iOEanx7VeeMxbHkId_CUUr72KNFANFDFpUKw_p3UtXgAx2OC9xJr2k9zQtti3HIlybpIb9LjLiM0W1VXFCdP-kLSwUXqR9DbfL90aU68L9mZ78BV1HbreQPnTScL4_FJwYtEDTcLeVhywrYLix7ZibwnEFjhQWV61mEBfNy1Xwh3aNflQN4CgjblyZsVfu2ZildHF9txs1-3cSGl7wQ9kkKGIQ61OPW-hNKfAlwpr6RLp0bB9CfYEhccPWY7l3pAy6fe7UzLhOfzxS2CFgjdBICC9B9MUxt79_5rPfSvgqW6J9gyBsSufazVSlAVl_uELG7Ykr8wY5T4lgXyjHNJuuyt0Ua12Tzxfor2j4aQze8CLTDQbsdTXWUFDki_lSNCE1tJ5txnwI2CTEuHTQD2C95b3hZmwvw9_sSNTfadlpoVD9YotQF0KiTdEJTiutu_9BVzsAskDLcWDVdLxhRDBYLSJEaAH-QVZG0qdCmawrdEOBzZYlLqs9DJSEfnyfRzcMHXH5maz8LLbf9_pmNYwcFvVtbfzS6aCBUORY-0-MO3y58vG5gLRNx36Q5W4j-fEGy_PnxVf5cGCLimsc4tRtqLbbkpq-Ry1by09hE2UoW8Vr74y0EduMqB87rnGrLLFnoPpQaAMFKWT9OPocHTw8JcYOFRcX-UOr009NDoUmoWzLZXkbX1ZM7Bdd2q9PN8AMDft_e1KZBc8JL3wxsA6D7TIjd2IIUtfqj1TEahDD2uz31Y7uNbUFuRadsXguABmpwnYugrWf4EPnAfC3mh-mBPg9rSvLGqRvJRJU0oROyoKFeKrx1W1o3fm-1B0mPAcD5O-XFPOUIywgVNf4uv5WDQnqMkr-sHzHoE9YQj_Oyte3fK8JjUUrhQ-szJ1iyQHypfkmrAp0QJsBy6h4en8zTl4ZkyFbU5BglE2wC7EnQvrjYxyGIPe0O_r-aGyqk5nrfZcORhJ_Ss3dlbFHgz4TyKnIugAE245wo79Lhkno6PgezmSUEXOn-ud5ovog1w2xeSiK8eb0ceLHU1sdF7hZDqI2KmCqQmYrkkHamzjkTuvUn2-CTJryIXl3YX8ZtOnBsohvb8PPUKPOMiKtDJIZSHqGrt2aMc_n4w-HtsE_u2jClQjYotiQkOwKrzavnmfffdA5lmnRTdnAc_RMpR9YkoGwfw=w2880-h1398)

# vue3 draggable anywhere

### Table of Contents

1. [Introduction](#introduction)
  - 1.1 [Project Overview](#project-overview)
  - 1.2 [Installation](#installation)

2. [Usage](#usage)
  - 2.1 [Basic Usage](#basic-usage)
  - 2.2 [Example With Configuration](#example-with-configuration)
  - 2.3 [Example With Multiple Draggable Elements With Configuration](#example-with-multiple-draggable-elements-with-configuration)

3. [Properties of Configuration](#properties-of-configuration)
3. [Key Features](#key-features)

## Project Overview

`vue-draggable-anywhere` is a Vue.js package supported by Vue3 that enables draggable behavior for HTML elements. It provides an easy-to-use directive to make any element draggable within a specified boundary.


## Installation

To use this package in your Vue.js project, you need to install it using npm. Run the following command in your terminal:

```bash
npm  install  vue-draggable-anywhere
```

  

## Basic Usage

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

  
  

### Example With Configuration

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

  
#### Example With Multiple Draggable Elements With Configuration

```html
<template>
  <div  class="parentClass"  style="height: 400px; width: 400px; margin: 20px; background: cornflowerblue;">
    <p>{{ position }}</p>
    <button
      v-draggable="configuration"
      style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
    >
      Move 1
    </button>
    <button
      v-draggable="configuration"
      style="width: 40px; height: 40px; background: red; display:flex; align-items: center;text-align: center; cursor: move; color: white;border-radius: 50%;"
    >
      Move 2
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
**note:** *If you want you can use separate configuration for every element, if you don't need configuration you can skip.*

### Properties Of Configuration 
##### *All the properties of the configuration are optional*

**x**
- Type: Number
- Default: `0`
- Description: Initial x position

**y**
- Type: Boolean
- Default: `0`
- Description: Initial y position

##### *initial x and y value also depend on offset*

**draggable**
- Type: Boolean
- Default: `true`
- Description: Set to `false` to disable dragging.

**boundary**
- Type: Boolean
- Default: `false`
- Description: Set to `true` to define a boundary for the draggable element.

**boundaryOffset**
- Type: Number/Object
- Default: `0`
- Description: Define the offset amount of the draggable element outside/inside the boundary. for outer offset set negative value.
-  **Note:**  `boundaryOffset` not work if `boundary` set to false
- Example: ``boundaryOffset: 0 or boundaryOffset: {x: 20, y: -40}``

**boundaryElement**
- Type: String
- Default: None
- Description: CSS selector of the boundary element, that contains the draggable element. 
For example code follow this section:  **Example with configuration**

  

**scrollableParentElement**
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

**onDragStart**
- Type: Function
- Default: None
- Description: Functional prop called when drag starts, returns the current position of the draggable element.
- example: ```onDragStart: yourFunction```

**onDragging**
- Type: Function
- Default: None
- Description: Functional prop called during dragging, returns the current position of the draggable element.
- example: ```onDragging: yourFunction```

**afterDragEnd**
- Type: Function
- Default: None
- Description: Functional prop called after the drag ends, returns the current position of the draggable element.
- example: ```afterDragEnd: yourFunction```



### Key Features

1. **Mobile Touch Support:**
    - Description: Provides touch support for mobile devices, enabling seamless dragging on touch screens.

2. **Multi-Element Draggable Support:**
    - Description: Allows the implementation of multiple draggable elements on the same page, each with its own configuration.

3. **Conditional Draggable:**
    - Description: Provides the option to conditionally enable or disable dragging based on certain criteria.

4. **Cross-Browser Compatibility:**
    - Description: Tested for cross-browser compatibility to ensure consistent behavior across various web browsers.

5. **Detailed Documentation:**
    - Description: Comprehensive documentation with clear examples and explanations for easy implementation and troubleshooting.

6. **Community Support:**
    - Description: Active community support for addressing issues, answering queries, and contributing to the enhancement of the package.

7. **Examples:**
   - Description: Provides examples for basic usage and advanced configurations with multiple draggable elements.

8. **Separate Configurations:**
   - Description: Allows using separate configurations for each draggable element if needed.

9. **Dynamic Position Tracking:**
   - Description: Dynamically tracks and displays the position of the draggable element during and after dragging.

10. **Support for Vue 3:**
   - Description: Specifically designed for Vue.js 3.

11. **Event Handling:**
    - Description: Supports callback functions for events such as drag start, dragging, and drag end.

12. **Boundary Element:**
    - Description: Option to specify a boundary element to constrain the draggable element within a certain area.

13. **Scrollable Container Support:**
    - Description: Allows specifying a scrollable parent element, ensuring proper functionality within scrollable containers.