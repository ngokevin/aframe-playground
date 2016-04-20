/**
 * Set random color within bounds.
 */
AFRAME.registerComponent('random-color', {
  schema: {
    min: {default: {x: 0, y: 0, z: 0}, type: 'vec3'},
    max: {default: {x: 1, y: 1, z: 1}, type: 'vec3'}
  },

  update: function () {
    var data = this.data;
    var max = data.max;
    var min = data.min;
    this.el.setAttribute('material', 'color', '#' + new THREE.Color(
      Math.random() * max.x + min.x,
      Math.random() * max.y + min.y,
      Math.random() * max.z + min.z
    ).getHexString());
  }
});
