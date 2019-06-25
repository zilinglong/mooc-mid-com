import React, { Component } from 'react';

class ComplexSquare extends Component {
  render() {
    const style = {
      width: '100%',
      height: '100px',
      lineHeight: '100px',
      background: this.props.color
    };
    return <div style={style}>this is square</div>;
  }
}

export default ComplexSquare;
