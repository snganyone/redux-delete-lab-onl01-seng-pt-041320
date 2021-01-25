import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.bands.map(band => <li key={band.id}>{band.name}</li>)}
      </div>
    );
  }
};

export default Band;
