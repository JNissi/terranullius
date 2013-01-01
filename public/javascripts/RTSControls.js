THREE.RTSControls = function RTSControls(object, domE) {
	var camera = object.children[0],
		domElement = domE || document,
		onMouseDown,
		onMouseUp,
		onMouseMove,
		onKeyDown,
		onKeyUp,
		lastKnownMousePosition =
		mouseMove = false,
		mouseRotate = false,
		moveFactor = 50,
		moveVector = new THREE.Vector3(0, 0, 0),
		rotateFactor = 5,
		rotateVector = new THREE.Vector3(0, 0, 0);

	onMouseDown = function onMouseDown(event) {
		switch (event.button) {
			case 0: //lmb
				mouseMove = true;
				break;
			case 2: //rmb(?)
				mouseRotate = true;
				break;
		}
	};

	onMouseUp = function onMouseUp(event) {
		switch (event.button) {
			case 0:
				mouseMove = false;
				break;
			case 1:
				mouseRotate = false;
				break;
		}
	};

	onMouseMove = function onMouseMove(event) {
		if (mouseMove) {
			console.dir(event);
		}
	};

	onKeyDown = function onKeyDown(event) {
		console.log(event.keyCode);
		switch (event.keyCode) {
			case 33: //pgup
				rotateVector.y = 1;
				break;
			case 36: //home
				rotateVector.y = -1;
				break;
			case 37: //left
				moveVector.x = -1;
				break;
			case 38: //up
				moveVector.z = -1;
				break;
			case 39: //right
				moveVector.x = 1;
				break;
			case 40: // down
				moveVector.z = 1;
				break;
			case 107: //plus
				break;
			case 109: //minus
				break;
		}
	};

	onKeyUp = function onKeyUp(event) {
		console.dir(object.rotation);
		switch (event.keyCode) {
			case 33://pgup
			case 36://home
				rotateVector.y = 0;
				break;
			case 37: //left
			case 39: //right
				moveVector.x = 0;
				break;
			case 38: //up
			case 40: //down
				moveVector.z = 0;
				break;
		}
	};

	this.update = function update(delta) {
		var move = new THREE.Vector3(),
			rotate = rotateVector.multiplyScalar(delta * rotateFactor);

		object.rotation.y += rotate.y;
		object.quaternion.setFromEuler(object.rotation);

		object.quaternion.multiplyVector3(moveVector, move);
		move = move.multiplyScalar(delta * moveFactor);

		object.position.x += move.x;
		object.position.z += move.z;

	};

	domElement.addEventListener(
		'contextmenu',
		function onContextMenu(event) {
			event.preventDefault();
		},
		false
	);
	domElement.addEventListener(
		'mousemove',
		onMouseMove,
	false
	);
	domElement.addEventListener(
		'mousedown',
		onMouseDown,
		false
	);
	domElement.addEventListener(
		'mouseup',
		onMouseUp,
		false
	);
	domElement.addEventListener(
		'keydown',
		onKeyDown,
		false
	);
	domElement.addEventListener(
		'keyup',
		onKeyUp,
		false
	);
};