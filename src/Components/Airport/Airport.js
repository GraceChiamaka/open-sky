import React, {Component} from 'react';
import Aux from '../../hoc/hoc';

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
            var arr = res.estArrivalAirport
            var dest = res.estDepartureAirport

            return (
                <div className="col-md-4">
                    <div className="card mb-3 p-3">
                        <p>Departure Time: {res.firstSeen}</p>
                        <p>Arrival Time: {res.lastSeen}</p>
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