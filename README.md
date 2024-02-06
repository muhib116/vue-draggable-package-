![Vue draggable anywhere](https://lh3.googleusercontent.com/fife/AGXqzDllVrhQx1pC15wJU1INYIR85ovCUAagtUnAh-c6GdVnYXG5zcWaQMbymbeZtb0IfUsekY-4Je9A26jA6HiBEn7nPVTuW7LtYhWbTVTcJeBYLYL2qe4auM8wSciN_-HAo6GZEpjsbpIqXniDBqriH4GXtEfQ5nCby5dQbQFgEgwxRNPL0ZatAyP0M9WZc6Dsupg-ezh954D__i2hkXK1cM9BOsZZg3bNpzHjt-y7jJ1L_ljZDBOAKYrJAhNm4iVgWoHF7C_YowsO8JNUo4wXvV03rMsK1hVTQU75nciPS1y6g_TjTKPD_uW-3HdiqqkwiaoPdjZrHmXmJ2Td8ipv8NPQDlf6w1G6IeotWp7qCYGMfuWhNgrjpy0uFAdGt-AbX4TB5_ZnXSFrepUk4PITb3JgLH0HReTi_dwRNH1EYNUgrrsBpsoiYPt4gTrRR7GKz7bv-jfKzLqrj3wh87Bjb1ebaqcY8n_RtRINyGDmX4hpVsVVyh-dLXL4O5t2AMsGbQgmjag1r1X7NMx1HxtXSnFgV2K0Us7cBTEVm8nHu_yODso8oc435FRKUk68PHpxxxepBO-XhgBd8G8PmOJUwqlIDzFkipO-ahyS5o2-4Zsyren7ygj1ekehGNnWoS4PSvPOQw7bNP4Xzoc6wl7OpNdXauAEKvxubYvI6J_F-hnf683dhVb7cKLWxHqV0iXa-__FGSJ61k7R-usDMWx0Zbozzl6u_3Ircytg6mIsxT-KYT3vOjDb-Rwseet7gNoBy0fGfuWeSU4y_yFpGlOUYTKcIK8I2qO8HFX7sbL2ofiTb_feyRnLvof3DaN8b3JLWmZJ7nz7xcv5eNetjdNr67fwNSfpyq0FGWmNVgW5EgLZ2-XM03bKoLSnGPjwATuEF5F8Aefbxs_8wFZAvbVSoRBp4413zOlSgGDqOMNnuvcub4XekN6X8i7XOne3qMN63c4nC7yklRAKU4UvrTprpD5OtwdEKGrdAuIfE1axV2R7R6C0A08qcg4TTc4PhxZVue9D6z4qBMEiW78_EOksDWCi3EXcS5xFxugEqdicUnSVTxAGYzZRxk4WLjCT50R75FY8Ly2_vA7x5-TwYYTirQmWvlJyOnisFETdVc72XJtM1kB4niviES8om1Cv6GTrYo_YuE84Kg1Bw8I2XFq7nREX_6yw9PoUF-m_mxafG2gJCWIXuqzFK1kQjdSV5VplCpK1v_GTloBSCp98bnJnH2FKBfkm3TZcWcAEeBgzraPZDk7jd-9dxxOK5591FA_8c6FK5TUkHlUYnqml1wZ-PUyAIBKdrOImzO8Pula-IrBOq-0nFH0HrKDmIxrqaxjFzJG7ywdwHAI_LRWyuggZuxOKrHmmTjhv36TuI_DCBie1Wey4GCza9nDRYtJ2G2Efxx0T2TgyH8wvMFmXqQ1cmeE9MkEWg-kuJI_yQV9NpXNLjCzIpoHfIFoG8trMoKhTQnJNKKh_FmjhkPVZO5NeJl3K1rZz9YA1iCnH_ioF7zjawtjNUWruGtQhAkCLTWcjBfykd474CQ8dPtvAfwJZoS6hsXIWzC0bUJJW0D6t7Z-wEZcczflCh2XY0uwYwOyM3CIPLOB0kyXe4CeZPXL8NyapKLtCHSJ-k-28YOA4fyXyvimbpnIt8GTF3A=w2880-h1398)

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
3. [Why Choos Vue Draggable](#why-choos-vue-draggable)
3. [Key Features](#key-features)

## Project Overview
`vue-draggable-anywhere` is a Vue.js package supported by Vue3 that enables draggable behavior for HTML elements. It provides an easy-to-use directive to make any element draggable within a specified boundary.


### Why Choos Vue Draggable
1. **Support for Vue 3:**
   - Description: Specifically designed for Vue.js 3.

2. **Cross-Browser Compatibility:**
    - Description: Tested for cross-browser compatibility to ensure consistent behavior across various web browsers.

3. **Detailed Documentation:**
    - Description: Comprehensive documentation with clear examples and explanations for easy implementation and troubleshooting.

4. **Community Support:**
    - Description: Active community support for addressing issues, answering queries, and contributing to the enhancement of the package.

5. **Examples:**
   - Description: Provides examples for basic usage and advanced configurations with multiple draggable elements.


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


### Key Features

1. **Mobile Touch Support:**
    - Description: Provides touch support for mobile devices, enabling seamless dragging on touch screens.

2. **Multi-Element Draggable Support:**
    - Description: Allows the implementation of multiple draggable elements on the same page, each with its own configuration.

3. **Conditional Draggable:**
    - Description: Provides the option to conditionally enable or disable dragging based on certain criteria.

4. **Separate Configurations:**
   - Description: Allows using separate configurations for each draggable element if needed.

5. **Dynamic Position Tracking:**
   - Description: Dynamically tracks and displays the position of the draggable element during and after dragging.

6. **Event Handling:**
    - Description: Supports callback functions for events such as drag start, dragging, and drag end.

7. **Boundary Element:**
    - Description: Option to specify a boundary element to constrain the draggable element within a certain area.

8. **Scrollable Container Support:**
    - Description: Allows specifying a scrollable parent element, ensuring proper functionality within scrollable containers.

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