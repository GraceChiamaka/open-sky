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

/*
 method fetch Dates from user inputDates
 and stores the entry in state
*/
    inputDates(){
      return (
        this.state.entryDates
      )
    }
    /*
    method daysBetween calculates the number of days between
    the selected start date and selected ending dat
    */
    daysBetween(startDate, endDate){
      const oneDay = 60 * 60 * 24;
      const unixDate = endDate - startDate;
      const dayDiff = unixDate / oneDay;
      if(dayDiff <= 7){
        return true;
      }else{
        return false;
      }
    }

/*
*/
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
    if(this.daysBetween(date.startDate, date.endDate)){
      this.setState({ entryDates: date, showCities:true });

    } else{
      console.log('terminate program');
      alert('Date has to be between 7 days');
      return
    }


  }

  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container mt-4">
            <h3 className="text-center">Citites with heavy air traffic</h3>
            <h3 className="text-center mt-3">Date interval should not exceed 7 days</h3>
            <form className="row mt-5" onSubmit={this.getDateInterval.bind(this)}>

              <div className="col-md-4">
                <label>Starting Date</label>
                <input type="date" id="start" className="form-control" required/>
              </div>
              <div className="col-md-4">
                <label>End Date</label>
                <input type="date" id="end" className="form-control" required/>
              </div>
              <div className="col-md-4 pt-4">
                <button type="submit" className="btn btn-primary btn-md btn-block mt-2">Submit</button>
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
