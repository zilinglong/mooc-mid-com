import React, { Component } from 'react';
import PropsLabel from './PropsLabel';
class PropsShirt extends Component {
  render() {
    return (
      <div>
        <PropsLabel {...this.props} />
      </div>
    );
  }
}

export default PropsShirt;
