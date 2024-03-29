var express = require('express'),
	routes = require('./routes'),
	app = module.exports = express.createServer();

// Configuration

app.configure(function onConfigure() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

});

app.configure('development', function onDevConfigure() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function onProdConfigure() {
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/account', routes.index);
app.get('/play', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
