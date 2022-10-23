const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/send', (req, res) => {
  res.sendFile(__dirname + '/send.html');

  io.sockets.once('connection', (socket) => {
    socket.on('send message', (message) => {
      let json =  JSON.stringify(message);
      console.log(json);
      io.sockets.emit('send message', message);
    });
  });
});

app.get('/get', (req, res) => {
  res.sendFile(__dirname + '/get.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});