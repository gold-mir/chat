import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Fragment } from 'react'

import Hello from './components/hello'
import Chat from './components/chat'

export class App extends React.Component {
  public render(): JSX.Element{
    return (
      <Fragment>
        <h1>This is the app component!</h1>
        <Hello/>
        <Chat/>
      </Fragment>
    )
  }
}

export const render = (): void => { ReactDOM.render(<App/>, document.getElementById('react-app-root')) }
