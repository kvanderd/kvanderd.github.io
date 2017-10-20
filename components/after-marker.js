// if(document.querySelector("a-marker").object3D.visible == true) {

if (markerRoot.visible === true) {
AFRAME.registerComponent('color-test', {
  dependencies: ['material'],

  init: function () {
    this.el.setAttribute('material', 'color', '#30beda');

  }
});

} else {
	console.log("no marker found")
}



 