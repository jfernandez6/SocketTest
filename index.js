var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var ng = require('angular');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(data){
  	var mm= data.usr+": "+data.msg;
  	console.log(mm);
    socket.broadcast.emit('chat message', data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});