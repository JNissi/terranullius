
/*
 * GET home page.
 */
exports.index = function index(req, res) {
  res.render('index', { title: 'Terra Nullius' });
};

exports.play = function index(req, res) {
	res.render('play', { title: 'Terra Nullius' });
};
