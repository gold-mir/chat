import * as socketio from 'socket.io';
import * as http from 'http'

export function createIO(server: http.Server): SocketIO.Server{
  let io = socketio(server)
  return io;
}

export function setupChat(io: SocketIO.Server): void{
  io.on('connection', (socket: SocketIO.Socket): void => {
    socket.on('message', (data: any): void => {
      socket.broadcast.emit('message', data)
      console.log(data)
    })

    console.log(`Socket ${socket.id} connected`)
    socket.on('disconnect', (): void => {
      console.log(`Socket ${socket.id} disconnected`)
    })
  })
}