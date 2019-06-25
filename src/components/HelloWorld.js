import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    const style = {
      fontSize: '24px',
      backgroundColor: this.props.bgColor,
      color: this.props.color
    };
    return (
      <div className="hello-world-container">
        <p style={style}>hello world! I am MMX! to {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWorld;
