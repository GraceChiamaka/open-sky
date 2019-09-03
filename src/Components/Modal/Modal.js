import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/hoc';

class Modal extends Component {
  
    state = {
        data: [],
        hide: false
    }
   
    hide(){
        this.setState({ hide: true })
    }

    async componentDidMount(){
        const newData = await this.props.airportData();
        //console.log(newData)
        this.setState({ data: newData  })
    } 
    display (){
        console.log(this.state.data, 'state data')
        return this.state.data.map((res) => {
            var arr = res.estArrivalAirport
            var dest = res.estDepartureAirport
            
            return (
                <div className="card mb-3 p-3">
                    <p>Departure Time: {res.firstSeen}</p>
                    <p>Arrival Time: {res.lastSeen}</p>
                    <p>Arrival Airport ICAO: <b>{arr ? arr : 'No estimated arival airport'}</b></p>
                    <p>Departure Airport ICAO: <b>{dest ? dest : 'No estimated depature airport'}</b></p>
                </div>
            )
        });
    };
    render(){
        return (
            <Aux>
                { this.state.hide && 
                    null
                }
                <Backdrop hide={this.hide} />
                <div className="Modal">
                    {this.props.children}
                    {this.display()}
                </div>
            </Aux>
        );
    } 
}

export default Modal;