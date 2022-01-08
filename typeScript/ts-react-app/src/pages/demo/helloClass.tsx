import { Button } from 'antd'
import React, { Component } from 'react'

interface Greeting {
  name: string;
}

interface State {
  count: number;
}

class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0,
  }
  static defaultProps = {
    name: ''
  }

  render () {
    return (
    <>
      <p>你点击了 {this.state.count}</p>
      <Button onClick={() => { this.setState({count: this.state.count + 1}) }}>Hello {this.props.name}</Button>
    </>
    )
  }
}

export default HelloClass
