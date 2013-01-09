(function initBase(global) {
	var tn = window.tn = {},
		GameObject;
	GameObject = function GameObject(conf) {
		if (!(this instanceof GameObject)) {
			return new GameObject(conf);
		}

		this.pos = conf.pos || {x: 0, y: 0, z: 0};
		this.rot = conf.rot || {x: 0, y: 0, z: 0};
		this.scale = conf.scale || {x: 1, y: 1, z: 1};
	};

	tn.GameObject = GameObject;
})(window);
