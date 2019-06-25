import React, { Component } from 'react';

class ComState extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase() {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 100
    });
  }
  componentDidMount() {
    this.timer = setInterval(this.increase, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        当前数目：{this.state.counter.toLocaleString()}
        <button onClick={this.increase}>增加100</button>
      </div>
    );
  }
}

export default ComState;
