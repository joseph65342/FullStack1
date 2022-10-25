import React from 'react';
import './styles.css';

class College extends React.Component {
    render() {
       return (
        <p id="college">
            College <b>{this.props.name}</b> with address <b>{this.props.location}</b>
        </p>
       );
    }
}

export default College;