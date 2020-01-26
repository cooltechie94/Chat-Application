var express=require('express');
var socket=require('socket.io');
// App Setup

var app=express();
var server=app.listen(4000,function(){
    console.log('Listening to port 4000')
})
// Static FIle
app.use(express.static('public'));

// Socket setup-Parameter is what server we wanna work with
var io=socket(server);

// Socket.io waits for a connection to be made on the server and make a web socket between the client and server
// We have to setup socket.io both on the frontend side and the backend side
io.on('connection',function(socket){
    // socket parameter refers to the instance of the web socket used
    console.log(socket.id)
    console.log('Socket Connection made')

    socket.on('chat',function(data){
        // Emit function is used to send data
        io.sockets.emit('chat',data)
            console.log(data);
    });
    socket.on('typing',function(data){
        // broadcasts to every other client except for the currently used one
        socket.broadcast.emit('typing',data);
    });


})