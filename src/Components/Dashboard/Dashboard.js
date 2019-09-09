import React, { Component } from 'react';
import * as moment from 'moment';
import CityCode from '../../Models/index';
import Cities from '../../Components/Cities/cities';
import Header from '../common/header';
import '../../App.css';

class App extends Component{
    state = {
      cities: CityCode.cities,
      entryDates: [],
      showCities: false,
    }
    

    inputDates(){
      return (
        this.state.entryDates
      )
    }
  
  cities(){
    return  this.state.cities.map(city => {
      return <Cities
              key={city.id}
              id={city.name}
              name={city.name}
              airports={city.airports}
              dates={this.state.entryDates}
            />
    });
  } 
  getDateInterval(e){
    e.preventDefault();
    this.setState({ showCities: false });
    let start =  e.target.elements.start.value;
    let end = e.target.elements.end.value;
    const date={
      startDate: moment(start, "YYYY-MM-DD  08:00").unix().toString(),
      endDate:  moment(end, "YYYY-MM-DD 09:00").unix().toString()
    }
    this.setState({ entryDates: date, showCities:true })
    setTimeout(() => {
      console.log( start, 'state', end);
    }, 1000);
  }
 
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container mt-4">
            <h3 className="text-center">Citites with heavy air traffic</h3>
            <form className="row mt-4" onSubmit={this.getDateInterval.bind(this)}>
              <h3 className="text-center">Date interval should not exceed 7 days</h3>
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
              {
                this.state.showCities  ?
                  this.cities()
                :
                null
              }
              
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
