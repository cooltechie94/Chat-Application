var socket=io.connect('http://localhost:4000/');

var message=document.querySelector('#message')
var handle=document.querySelector('#handle')
var send=document.querySelector('#send')
var output=document.querySelector('#output');
var feedback=document.querySelector('#feedback');

send.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
    
})
message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value)
})
// Listen for events
socket.on('chat',function(data){
    feedback.innerHTML=''
    output.innerHTML+=`<p><strong>${data.handle}:</strong>${data.message}</p>`
});
socket.on('typing',function(data){
    feedback.innerHTML=`<p><em>${data} is typing a message...</em></p>`
})