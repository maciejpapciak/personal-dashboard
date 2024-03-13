import express from 'express';
import { createServer } from 'http';
import socketIo from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*'
}));

const server = createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('sendMessage', (message) => {
        io.emit('message', message); // Broadcast the message to all connected clients
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

const PORT = process.env.PORT || 5173;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});