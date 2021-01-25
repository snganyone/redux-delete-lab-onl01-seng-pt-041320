import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.delete(this.props.id)
  }

  render() {
    console.log(this.props);
    return(
      <div>
        {this.props.bands.length > 0 ? this.props.bands.map((band, id) => <li key={id}>{band.name}<button onClick={() => this.props.delete(this.props.delete(band.id))}>DELETE</button></li>) : null}
      </div>
    );
  }
};

export default Band;
