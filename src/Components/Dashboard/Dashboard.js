import React, { Component } from 'react';
import CityCode from '../../Models/index';
import Cities from '../../Components/Cities/cities';
import Header from '../common/header';
import '../../App.css';

class App extends Component{
  state={
    cities: CityCode.cities,
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

 
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container mt-4">
            <h3 className="text-center">Citites with heavy air traffic</h3>
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
