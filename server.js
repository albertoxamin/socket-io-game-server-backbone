var io = require('socket.io')(process.env.PORT || 3000);
var Player = require('./player.js').Player;

var players = [];

io.on('connection', function(socket){
	console.log(socket.client.id);
	var currentPlayer = new Player();
	console.log('client ' + currentPlayer.id + ' connected');

	players.push(currentPlayer);

	socket.on('chat message', function(data){
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function(data){
		console.log('client '+ currentPlayer.id +' disconnected');
		players.splice(players.indexOf(currentPlayer),1);
		socket.broadcast.emit('disconnected', {id:currentPlayer.id});
	});
});
