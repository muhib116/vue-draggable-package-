# vue-draggable-anywhere

## Project Overview

`vue-draggable-anywhere` is a Vue.js package that enables draggable behavior for HTML elements. It provides an easy-to-use directive to make any element draggable within a specified boundary.

## Installation

To use this package in your Vue.js project, you need to install it using npm. Run the following command in your terminal:

```bash
npm install vue-draggable-anywhere


Usage
To make an element draggable, use the v-draggable-anywhere directive on the desired HTML element. Below is an example of how to use it:


<template>
  <div>
    <h1 v-draggable-anywhere="draggableOptions">Move me</h1>
  </div>
</template>

<script setup>
import 'vue-draggable-anywhere/dist/vue-draggable-anywhere.css'; // Import the styles
import VueDraggable from 'vue-draggable-anywhere';

const draggableOptions = {
  x: position.left,
  y: layoutSize.height - position.bottom,
  draggable: !item.child.length,
  boundary: true,
  parentClass: 'conceptChartContainer',
  scrollableWrapperClass: 'mainContentWrapper',
  afterDragEnd: (position) => handleDragEnd(position),
};

const handleDragEnd = (position) => {
  // Your logic after drag ends
};
</script>


Configuration
The v-draggable-anywhere directive accepts various configuration options to customize the draggable behavior. Here are some of the available options:

x (Number): Initial x-coordinate of the element.
y (Number): Initial y-coordinate of the element.
draggable (Boolean): Whether the element is draggable.
boundary (Boolean): Whether to constrain the draggable element within its parent container.
parentClass (String): Class name of the parent container.
scrollableWrapperClass (String): Class name of the scrollable wrapper.
afterDragEnd (Function): Callback function called after the drag operation ends.