import * as React from 'react';
import * as IO from 'socket.io-client'
import Chatbox from './chatbox';

type State = {
  connected: boolean;
  messages: string[];
}

export default class Chat extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      connected: false,
      messages: []
    }
  }

  public componentDidMount(): void {
    const io: SocketIOClient.Socket = IO('localhost:3000')
    io.on('connect', (): void => {
      this.setState({ connected: true })
    })

    io.on('disconnect', (): void => {
      this.setState({ connected: false })
    })

    io.on('message', (data: string): void => {
      console.log(`Received message ${data}`);
      this.receiveMessage(data);
    })

    this.io = io;
  }

  private handleMessage = (message: string): void => {
    this.io.emit('message', message)
  }

  private receiveMessage = (message: string): void => {
    this.setState((state: State): {} => {
      return {messages: [...state.messages, message]}
    })
  }

  private io: SocketIOClient.Socket;

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <h5>This is the chat component</h5>

        <ul>
          {
            this.state.messages.map((message, index): JSX.Element => {
              return <li key={index}>{message}</li>
            })
          }
        </ul>

        <p>{this.state.connected ? "Connected" : "Not Connected"}</p>
        <Chatbox enabled={this.state.connected} onSubmit={this.handleMessage}/>
      </React.Fragment>

    )
  }
}