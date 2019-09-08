import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/hoc';
import './Modal.css';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop hide={props.hide} />
            <div className="wrapper">
                {props.children}
            </div>
        </Aux>
    );}

export default modal;