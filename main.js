const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const { getNextMessage } = require('./getNotifications');
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());


io.on('connection', (socket) => {
    socket.emit('notification', { message: getNextMessage() });
    const interval = setInterval(() => {
        socket.emit('notification', { message: getNextMessage() });
    }, 50000);

    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(interval);
    });
});

server.listen(8080, () => {
    console.log('WebSocket server started on port 8080.');
});
