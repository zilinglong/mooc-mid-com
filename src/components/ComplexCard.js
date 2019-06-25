import React, { Component } from 'react';
import ComplexSquare from './ComplexSquare';
import ComplexLabel from './ComplexLabel';
class ComplexCard extends Component {
  render() {
    const cardStyle = {
      width: '200px',
      padding: '2px',
      border: '1px solid #f00'
    };
    return (
      <div style={cardStyle}>
        <ComplexSquare color={this.props.color} />
        <ComplexLabel color={this.props.color} />
      </div>
    );
  }
}

export default ComplexCard;
