import React, { Component } from 'react';
import * as moment from 'moment';
import CityCode from '../../Models/index';
import Cities from '../../Components/Cities/cities';
import Header from '../common/header';
import '../../App.css';

class App extends Component{
  state={
    cities: CityCode.cities,
    startDate: 0,
    endDate: 0
  }

  cities(){
    return  this.state.cities.map(city => {
      return <Cities
              key={city.id}
              id={city.name}
              name={city.name}
              airports={city.airports}
            />
    });
  }
  getDateInterval(e){
    e.preventDefault();
    const date={
      startDate: e.target.elements.start.value,
      endDate: e.target.elements.end.value
    }

    let start = moment(date.startDate, "YYYY/MM/DD").unix();
    let end = moment(date.endDate, "YYYY/MM/DD").unix();
    //this.setState({ startDate: start, endDate: end })
    //console.log(this.state.startDate)
  }

 
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container mt-4">
            <h3 className="text-center">Citites with heavy air traffic</h3>
            <form className="row mt-4" onSubmit={this.getDateInterval}>
              <div className="col-md-4">
                <input type="date" id="start" className="form-control" required/>
              </div>
              <div className="col-md-4">
                <input type="date" id="end" className="form-control" required/>
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary btn-md btn-block">Submit</button>
              </div>
              </form>
            <div className="row">
              {this.cities()}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
