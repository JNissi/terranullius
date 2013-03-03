(function initBase(global) {
	var tn = window.tn = {},
		gameobject;
	gameobject = function gameobject(conf) {
		return {
			pos: conf.pos || {x: 0, y: 0, z: 0},
			rot: conf.rot || {x: 0, y: 0, z: 0},
			scale: conf.scale || {x: 1, y: 1, z: 1},
			visible: conf.visible || true,
			object3d: new THREE.Object3D()
		};
	};

	tn.gameobject = gameobject;
})(window);
