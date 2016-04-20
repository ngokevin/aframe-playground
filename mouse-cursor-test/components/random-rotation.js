/**
 * Set random rotation within bounds.
 */
AFRAME.registerComponent('random-rotation', {
  schema: {
    min: {default: {x: 0, y: 0, z: 0}, type: 'vec3'},
    max: {default: {x: 360, y: 360, z: 360}, type: 'vec3'}
  },

  update: function () {
    var data = this.data;
    var max = data.max;
    var min = data.min;
    this.el.setAttribute('rotation', {
      x: Math.random() * max.x + min.x,
      y: Math.random() * max.y + min.y,
      z: Math.random() * max.z + min.z
    });
  }
});
