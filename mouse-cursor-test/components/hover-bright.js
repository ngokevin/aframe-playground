AFRAME.registerComponent('hover-bright', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      el.setAttribute('material', 'shader', 'flat');
      el.setAttribute('light', {
        color: el.getAttribute('random-color'),
        intensity: 0.9,
        type: 'point'
      });
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('material', 'shader', 'standard');
      el.removeAttribute('light');
    });
  }
});
