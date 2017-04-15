var express        = require('express');
var methodOverride = require('method-override');
var path           = require('path');
var compress       = require('compression');
var app            = express();
var port           = process.env.PORT || 3000;
var http           = require('http').createServer(app);
var io             = require('socket.io')(http);

// gzip
app.use(compress());
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// set the static files location
app.use(express.static(__dirname + '/dist'));
// route to handle all angular requests
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

// var socket = io.connect();
// socket.emit('news', { hello: 'world' });
io.on('connection', function (socket) {
  console.log('user connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('add-message', function(message) {
    io.emit('message', { type: 'new-message', text: message });
  });
});

http.listen(port, function() {
  if (app.get('env') === 'development') {
    console.log('Magic happening at ' + 'http://localhost:' + port);
  }
});
