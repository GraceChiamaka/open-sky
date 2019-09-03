import React, { Component } from 'react';
import CityCode from './Models/index';
import Cities from './Components/Cities/cities';
import './App.css';

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
        <header className="">
          <nav className="navbar navbar-expand-lg navbar-dark primary-color mx-auto">
            <a className="navbar-brand" href="/">Open Sky Network</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
        </header>
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
