import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import Aux from '../../hoc/hoc';

class cities extends Component {
    state = {
        show: false,
        hide: false 
    }
    show = () => {
        this.setState({ show: true })
    }
    hide = () => {
        this.setState({ hide: true })
    }

    airports(){
        const airports = this.props.airports;
        return airports.map((airport, index) =>{
           this.getAirportDetails(airport);
           return(
               <Aux>
                   <h3 className="mt-3 text-capitalize"><strong>{airport.name}</strong></h3>
                   <Modal key={index} airportData={this.getAirportDetails.bind(this, airport)} />
               </Aux>                
           );
        });
    }
    async getAirportDetails(airport){
        //let code = airport.code
        const url = `https://opensky-network.org/api/flights/arrival?airport=${airport.code}&begin=1517227200&end=1517230800`;
        const data = await fetch(url)
        return await data.json();
    }
    render(){
        return (
            <Aux>
                <div  className="col-md-4">
                    <div className="mt-5 text-center">
                        
                        <div className="card p-3 mt-5 text-capitalize text-left" id={this.props.id}>
                            <h3>{this.props.name}</h3>
                        </div>
                        <button className="btn btn-block btn-success mt-3" onClick={this.show}>View Flights Details</button>
                    </div>
                </div>
                {this.state.show &&
                    <Modal hide={this.hide}>
                        {this.airports()}
                    </Modal>
                }
            </Aux>
        );
    }
}

export default cities;