import React, {Component} from 'react';
import * as moment from 'moment';

import Aux from '../../hoc/hoc';
import './Airport.css';

class Airport extends Component{
    state = {
        data: [],
        hide: false,
        dataReady: false,
        dataLoading:false
    }
    hide() {
        this.setState({ hide: true })
    }
    async componentDidMount() {
        this.setState({dataLoading: true})
        const airportDetails = await this.props.airportDetails;
        if (airportDetails === undefined) {
            this.setState({ dataReady: false });
        } else {
            this.setState({ dataReady: true, dataLoading: false, data: airportDetails });
        }
    }
    getDetails() {
        return this.state.data.map((res) => {
            const arr = res.estArrivalAirport
            const dest = res.estDepartureAirport
            let arrivalTime = new Date(res.lastSeen * 1000);
            let deptTime = ne Date(res.firstSeen * 1000);
            


            return (
                <div className="col-md-6">
                    <div className="card mb-3 p-3 card-h">
                        <p>Departure Time: {moment(deptTime).format('DD/MM/YYYY')}</p>
                        <p>Arrival Time: {moment(arrivalTime).format('DD/MM/YYYY')}</p>
                        <p>Arrival Airport ICAO: <b>{arr ? arr : 'No estimated arival airport'}</b></p>
                        <p>Departure Airport ICAO: <b>{dest ? dest : 'No estimated depature airport'}</b></p>
                    </div>
                </div>
            )
        });
    }

    display() {
        const { dataReady, dataLoading } = this.state;
        return (
            <Aux>
                {
                    (dataReady && !dataLoading) &&
                    this.getDetails()
                }
                {
                    !dataReady &&
                    <div></div>
                }
                {
                    dataLoading &&
                    <h1>Data is loading</h1>
                }
            </Aux>
        )
        
    }
    render(){
        return (
            <Aux>
                {this.state.hide &&
                    null
                }
                <div>
                    {this.props.children}
                    <div className="row">
                        {this.display()}
                    </div>

                </div>
            </Aux>

        )
    }
}
export default Airport;