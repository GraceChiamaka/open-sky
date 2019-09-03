import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    return (
        <div className="Backdrop" onClick={props.hide}></div>
    );
}

export default backdrop;