import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>Count {this.state.count}</button>
      </div>
    )
  }
}
