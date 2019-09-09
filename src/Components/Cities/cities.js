import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import Aux from '../../hoc/hoc';
import Airport from '../Airport/Airport';

class cities extends Component {
    state = {
        show: false,
        hide: false,
        currCity: undefined
    }
    show = (city) => {        
        this.setState({ show: true, currCity: city })
    }
    hide = () => {
        this.setState({ show: false, currAirport: undefined , hide: true })
    }
    airports(){
        const airports = this.props.airports;
        return airports.map((airport, index) =>{
          const airportDetails = this.getAirportDetails(airport)
           this.getAirportDetails(airport);
           return(
               <Aux>
                   <div className="py-2 px-2 text-white mb-3  bg-primary">
                        <h3 className="mt-3 text-capitalize text-center">
                            <strong>{airport.name}</strong>
                        </h3>
                   </div>
                  
                   <Airport key={index} airportDetails={airportDetails} airport={airport} name={airport.name} />
               </Aux>                
           );
        });
    }
    async getAirportDetails(airport){
        const url = `https://opensky-network.org/api/flights/arrival?airport=${airport.code}&begin=${this.props.dates.startDate}&end=${this.props.dates.endDate}`;
        const data = await fetch(url).catch((error) => { throw error; })
        return data.json();
    }
    
    render(){
        return (
            <Aux>
                <div  className="col-md-4">
                    <div className="mt-5 text-center">
                        
                        <div className="card p-3 mt-5 text-capitalize text-left" id={this.props.id}>
                            <h3>{this.props.name}</h3>
                        </div>
                        <button className="btn btn-block btn-success mt-3" onClick={this.show.bind(this, this.props.name)}>View Flights Details</button>
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