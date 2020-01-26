# Chat-Application
This is a Node.js chat application which allows user to chat with each other. Socket.io is used for the bi-directional flow of data between client and server.
When user A types a message in his window, the other users sees the message "User A is typing a message" on their screen. 
Once the message is sent by user A, the message along with the handle name is emitted with the help of Socket.io and viewed by all the users.
