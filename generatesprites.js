var sprintf = require('sprintf').sprintf,
	sprite = require('node-sprite'),
	stylus = require('stylus'),
	fs = require('fs'),
	str = '',
	sprites = {};

(function readSprites(sprites) {
	var files = fs.readdirSync('./assets'),
		i,
		len = files.length,
		file,
		stats,
		dirFiles,
		i2,
		len2,
		spriteObj;

	for(i = 0; i < len; i++) {
		file = files[i];
		stats = fs.statSync('./assets/' + file);
		if (stats.isDirectory()) {
			spriteObj = sprites[file] = {};
			dirFiles = fs.readdirSync('./assets/' + file);
			len2 = dirFiles.length;
			for (i2 = 0; i2 < len2; i2++) {
				file = dirFiles[i2].replace('.png', '');
				spriteObj[file] = {};
			}
		}
	}
})(sprites);


(function createStylusText(sprites) {
	var i1,
		i2,
		sprite,
		icon;
	for (i1 in sprites) {
		sprite = sprites[i1];
		for (icon in sprite) {
			str += sprintf(".%s\n\t.icon\n\t\tsprite %s %s\n\n", icon, i1, icon);
		}
	}
})(sprites);

fs.writeFileSync('./assets/sprites.styl', str, 'utf8');

sprite.stylus(
	{
		path: './assets',
		httpPath: '/images'
	}, function (err, helper) {
  stylus(str)
    .set('filename', 'assets/sprites.styl')
    .define('sprite', helper.fn)
    .render(function (err, css) {
			if (err) {
				throw err;
			}
			fs.writeFileSync('./public/stylesheets/sprites.css', css, 'utf8');
    });
});