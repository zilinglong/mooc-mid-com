import React, { Component } from 'react';

class PropsDisplay extends Component {
  render() {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
}

export default PropsDisplay;
