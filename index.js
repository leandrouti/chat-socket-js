var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(request, response) {
	//response.send('Hello!!');
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a connection was made');

	socket.on('message', function(msg) {
		io.emit('message', msg);
	});

	socket.on('disconnect', function() {
		console.log('disconected');
		io.emit('message', 'user disconnected');
	});
});



