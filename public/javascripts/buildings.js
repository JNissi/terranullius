(function initBuildings(global) {
	var tn = global.tn || {},
		Building,
		Windmill;

	global.tn = tn;

	Building = function Building() {
		if (!(this instanceof Building)) {
			return new Building(arguments);
		}
	};
})(window);