var http = require('http');
var express = require('express');
var app = express();
var static = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.set('port', process.env.PORT || 3000);

app.use('/', static(path.join(__dirname, '/public')));

server.listen(app.get('port'), function () {
    console.log('서버가 실행:', app.get('port'));
});

io.sockets.on('connection', socket => {
    console.log('소켓 연결 됨:', socket.request.connection._peername);
    socket.on('startDraw', (data)=>{
        //console.log(data)
        io.sockets.emit("socketDrawStart", data)
    })
    socket.on('Draw', (data)=>{
        //console.log(data)
        io.sockets.emit("socketDraw", data)
    })
    socket.on('endDraw', ()=>{
        //console.log("end")
        io.sockets.emit("socketDrawEnd", true)
    })
    
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});