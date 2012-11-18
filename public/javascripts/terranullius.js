(function initTerraNullius(THREE) {
	var camera,
		scene,
		renderer,
		geometry,
		material,
		mesh,
		setView,
		init,
		animate,
		render,
		initMouseControls;

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
			loader = new three.JSONLoader(true);

		document.onselectstart = function onselectstart() {
			return false;
		};

		scene = new three.Scene();
		camera = new three.PerspectiveCamera(75, 1, w / h, 10000);
		camera.position.z = 10;
		scene.add(camera);
		scene.add(new three.AmbientLight(0xffffff));
		var pointLight = new three.PointLight(0xff4400, 5, 30);
		pointLight.position.set(5, 0, 0);

		material = new three.MeshBasicMaterial({
			color: 0xff0000,
			wireframe: false
		});
		renderer = new three.WebGLRenderer();
		setView();
		dom = renderer.domElement;
		window.onresize = setView;
		document
			.getElementById('main-container')
			.appendChild(renderer.domElement);
		renderer.domElement.id = 'mainview';
		loader.load(
			'/objects/ekatesti.js',
			function onGeometry(geometry, materials) {
				console.dir(materials);
				var material = materials[0];
//				material.morphTargets = true;
				material.color.setHex(0xffaaaa);
				material.ambient.setHex(0xefefef);
				mesh = new three.Mesh(geometry, new three.MeshFaceMaterial(materials));
				mesh.position.set(0, 0, 0);
				scene.add(mesh);
				initMouseControls();
				cb();
			}
		);
	};

	initMouseControls = function initMouseControls() {
		var mainview = document.getElementById('mainview'),
			scrollListener = function scrollListener(e) {
				var delta = Math.max(-1, Math.min(1, e.wheelDelta));
				camera.position.z += delta * 10;
			};
		mainview.addEventListener('mousewheel', scrollListener, false);
	};

	(function initAnimate(requestAnimationFrame) {
		animate = function animate() {
			render();
			requestAnimationFrame(animate);
		};
	})(requestAnimationFrame);

	render = function render() {
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;
		renderer.render(scene, camera);
	};

	init(animate);
})(THREE);
