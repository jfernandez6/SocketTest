var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('index.html',{ root : __dirname});
});

io.on('connection', function(socket){
  socket.on('chat message', function(data){
  	var mm= data.usr+": "+data.msg;
  	console.log(mm);
    socket.broadcast.emit('chat message', data);
  });
  socket.on('chat status', function(typing){
  	console.log(typing);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});