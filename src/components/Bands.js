import React from 'react';
import Band from './Band';

const Band = props => {
    return(
        <div>{props.bands.map(band => <Band key={band.id} {...band} delete={this.props.delete}/>)}</div>
    )
}

export default Band;