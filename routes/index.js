
/*
 * GET home page.
 */
exports.index = function index(req, res) {
  res.render('index', { title: 'Terra Nullius' });
};

