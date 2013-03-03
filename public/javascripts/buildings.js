(function initBuildings(global) {
	var tn = global.tn;

	tn.building = function building(conf) {
		var obj = tn.gameobject(conf);
		//Add building stuff.
		return obj;
	};

	tn.windmill = windmill = function windmill(conf, cb) {
		var openDoorTween,
			closeDoorTween,
			rot = {z: 0},
			obj = tn.building(conf),
			three = THREE,
			loader = new three.SceneLoader(true);
		obj.rotor = null;
		obj.building = null;
		obj.door = null;
		obj.object3d = new three.Object3D();

		loader.load(
			'/objects/windmill.js',
			function onWindmillLoad(data) {
				var model;
				if (data) {
					model = data.scene;
					obj.object3d.add(model);
					model.traverse(function onTraverse(o) {
							switch (o.name) {
								case 'building':
									obj.building = o;
									break;
								case 'rotor':
									obj.rotor = o;
									o.material.side = three.DoubleSide;
									o.material.transparent = true;
									break;
								case 'door':
									obj.door = o;
									break;
							}
						});
					cb(obj);
				}
			}
		);

		openDoorTween = new TWEEN.Tween(rot)
			.to({z: 1.6}, 2000)
			.easing(TWEEN.Easing.Exponential.Out)
			.onUpdate(function onOpenUpdate() {
				obj.door.rotation.z = this.z;
			});
		closeDoorTween = new TWEEN.Tween(rot)
			.to({z: 0}, 2000)
			.easing(TWEEN.Easing.Bounce.Out)
			.onUpdate(function onCloseUpdate() {
				obj.door.rotation.z = this.z;
			});
		openDoorTween.chain(closeDoorTween);
		closeDoorTween.chain(openDoorTween);

		obj.openDoorTween = openDoorTween;
		obj.closeDoorTween = closeDoorTween;

		return obj;
	};

})(window);