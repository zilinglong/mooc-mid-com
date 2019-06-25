import React, { Component } from 'react';
import PropsDisplay from './PropsDisplay';
class PropsLabel extends Component {
  render() {
    return (
      <div>
        <PropsDisplay {...this.props} />
      </div>
    );
  }
}

export default PropsLabel;
