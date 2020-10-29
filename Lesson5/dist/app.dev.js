"use strict";

new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add: function add(inc) {
      this.age += inc;
    },
    subtract: function subtract(dec) {
      this.age -= dec;
    },
    updateXY: function updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});