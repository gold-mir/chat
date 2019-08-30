import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';

import app from './app/app';
import * as chat from './chat/chat.module';

const server: http.Server = app.listen(3000, (): void => {
  console.log('started app on port 3000')
})

const io: SocketIO.Server = socketio(server);

chat.setupChat(io);