import React, { Component } from 'react';

class ComplexLabel extends Component {
  render() {
    const style = {
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      background: '#fff'
    };
    return <div style={style}>{this.props.color}</div>;
  }
}

export default ComplexLabel;
