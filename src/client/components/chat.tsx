import * as React from 'react';
import * as IO from 'socket.io-client'

export default class Chat extends React.Component {
  public constructor(props: {}){
    super(props)
    const io: SocketIOClient.Socket = IO('localhost:3000')
    io.on('connection', (): void => {
      console.log(`connected as ${this.io.id}`)
    })

    this.io = io;
  }

  private io: SocketIOClient.Socket;

  public render(): JSX.Element {
    return (
      <h5>This is the chat component</h5>
    )
  }
}