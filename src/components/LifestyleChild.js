import React, { Component } from 'react';

class Lifestyle extends Component {
  componentWillMount() {
    console.log('child componentWillMount');
  }
  componentDidMount() {
    console.log('child componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('child componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child  shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('child componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('child componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }
  render() {
    return (
      <div>
        <p>LifestyleChild接收的childNum:{this.props.childNum}</p>
      </div>
    );
  }
}

export default Lifestyle;
