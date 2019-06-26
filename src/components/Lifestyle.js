import React, { Component } from 'react';
import LifestyleChild from './LifestyleChild';
class Lifestyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextState.counter > 5) {
      console.log('nextState.counter > 5');
      return false;
    } else {
      console.log('nextState.counter <= 5');
      return true;
    }
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>
        当前计数为：{this.state.counter}
        <button onClick={this.increase}>加一</button>
        <LifestyleChild childNum={this.state.counter} />
      </div>
    );
  }
}

export default Lifestyle;
