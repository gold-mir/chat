import * as React from 'react';
import * as IO from 'socket.io-client'

type State = {
  connected: boolean;
}

export default class Chat extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      connected: false
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

    this.io = io;
  }

  private io: SocketIOClient.Socket;

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <h5>This is the chat component</h5>

        <p>{this.state.connected ? "Connected" : "Not Connected"}</p>

      </React.Fragment>

    )
  }
}