import * as React from 'react';
import { Component, ChangeEvent, FormEvent } from 'react';

type SubmitFunction = (data: string) => void;

type Props = {
  enabled: boolean;
  onSubmit: Function;
}

type State = {
  text: string;
}

export default class Chatbox extends Component<Props, State>{
  public constructor(props: Props){
    super(props)
    this.state = { text: "" }
  }

  private handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({text: event.target.value});
  }

  private handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if(this.state.text){
      this.props.onSubmit(this.state.text);
      this.setState({text: ""})
    }
  }

  public render(): JSX.Element {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="type a message"/>
        <button type="submit">Send</button>
      </form>
    )
  }
}