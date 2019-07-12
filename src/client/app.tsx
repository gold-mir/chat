import * as React from "react"
import * as ReactDOM from "react-dom"

import Hello from './components/hello'

export const render = () => { ReactDOM.render(<Hello/>, document.getElementById('react-app-root')) } 