import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
};

export default Band;
