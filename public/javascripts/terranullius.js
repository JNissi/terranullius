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
		render;

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
			h = window.innerHeight;

		document.onselectstart = function onselectstart() {
			return false;
		};

		scene = new three.Scene();
		camera = new three.PerspectiveCamera(75, 1, w / h, 10000);
		camera.position.z = 1000;
		scene.add(camera);

		geometry = new three.CubeGeometry(200, 200, 200);
		material = new three.MeshBasicMaterial({
			color: 0xff0000,
			wireframe: false
		});
		mesh = new three.Mesh(geometry, material);
		scene.add(mesh);
		renderer = new three.WebGLRenderer();
		setView();
		dom = renderer.domElement;
		window.onresize = setView;
		document
			.getElementById('main-container')
			.appendChild(renderer.domElement);
		renderer.domElement.id = 'mainview';
		cb();
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
