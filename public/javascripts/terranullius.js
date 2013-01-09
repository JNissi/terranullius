(function initTerraNullius(THREE) {
	var camera,
		clock,
		controls,
		scene,
		renderer,
		windmill,
		rotor,
		door,
		building,
		setView,
		init,
		animate,
		render,
		initMouseControls,
		Windmill;

	Windmill = function Windmill(cb) {
		var three = THREE,
			loader = new three.SceneLoader(true),
			self = this;
		this.rotor = null;
		this.building = null;
		this.door = null;
		this.object3d = new three.Object3D();

		loader.load(
			'/objects/windmill.js',
			function onWindmillLoad(data) {
				var model;
				if (data) {
					model = data.scene;
					console.dir(model);
					self.object3d.add(model);
					model.traverse(function onTraverse(o) {
							switch (o.name) {
								case 'building':
									self.building = o;
									break;
								case 'rotor':
									self.rotor = o;
									o.material.side = three.DoubleSide;
									o.material.transparent = true;
									break;
								case 'door':
									self.door = o;
							}
						});
					cb(self);
				}
			}
		);
	};


	setView = function setView() {
		var w = window.innerWidth,
			h = window.innerHeight;
		console.log('Setting to:' + w + 'x' + h);
		camera.aspect = w / h;
		renderer.setSize(w, h);
	};

	init = function init(cb) {
		var three = THREE,
			dom,
			w = window.innerWidth,
			h = window.innerHeight,
			loader = new three.JSONLoader(true),
			dummy;

		document.onselectstart = function onselectstart() {
			return false;
		};

		scene = new three.Scene();
		dummy = new three.Object3D();
		dummy.position.set(0, 0, 0);
		camera = new three.PerspectiveCamera(75, w / h, 1, 10000);
		camera.position.set(0, 12, 12);
		camera.lookAt(new three.Vector3(0, 0, 0));
		dummy.add(camera);
		scene.add(dummy);
		controls = new three.RTSControls(dummy);

		scene.add(new three.AmbientLight(0xababab));
		var pointLight = new three.PointLight(0xff4400, 5, 30);
		pointLight.position.set(5, 0, 0);
		scene.add(pointLight);
		renderer = new three.WebGLRenderer();
		setView();
		dom = renderer.domElement;
		window.onresize = setView;
		document
			.getElementById('main-container')
			.appendChild(renderer.domElement);
		renderer.domElement.id = 'mainview';
		new Windmill(function onWindmillLoad(wm) {
			scene.add(wm.object3d);
			rotor = wm.rotor;
			building = wm.building;
			windmill = wm.object3d;
			door = wm.door;
			//initMouseControls();
			cb();
		});
	};

/*	initMouseControls = function initMouseControls() {
		var mainview = document.getElementById('mainview'),
			scrollListener = function scrollListener(e) {
				var delta = Math.max(-1, Math.min(1, e.wheelDelta));
				camera.position.z += delta * 2;
			};
		mainview.addEventListener('mousewheel', scrollListener, false);
	};*/

	(function initAnimate(requestAnimationFrame) {
		var openDoorTween,
			closeDoorTween,
			rot = {z: 0};
		clock = new THREE.Clock();
		openDoorTween = new TWEEN.Tween(rot)
			.to({z: 1.6}, 2000)
			.easing(TWEEN.Easing.Exponential.Out)
			.onUpdate(function onOpenUpdate() {
				door.rotation.z = this.z;
			});
		closeDoorTween = new TWEEN.Tween(rot)
			.to({z: 0}, 2000)
			.easing(TWEEN.Easing.Bounce.Out)
			.onUpdate(function onCloseUpdate() {
				door.rotation.z = this.z;
			});
		openDoorTween.chain(closeDoorTween);
		closeDoorTween.chain(openDoorTween);
		openDoorTween.start(clock.getElapsedTime() * 1000);

		animate = function animate() {
			var delta = clock.getDelta();
			controls.update(delta);
			TWEEN.update(clock.getElapsedTime() * 1000);
			render();
			requestAnimationFrame(animate);
		};
	})(requestAnimationFrame);

	render = function render() {
		rotor.rotation.y += 0.01;
		rotor.quaternion.setFromEuler(rotor.rotation);
		door.quaternion.setFromEuler(door.rotation);
		renderer.render(scene, camera);
	};

	init(animate);
})(THREE);
