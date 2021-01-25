import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.bands.map((band, id) => <li key={id}>{band.name}<button>DELETE</button></li>)}
      </div>
    );
  }
};

export default Band;
