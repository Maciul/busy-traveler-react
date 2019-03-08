import React, { Component } from 'react';
import axios from 'axios'
import logo from './terrain.png';
import InputForm from './components/InputForm'

import './App.css';

class App extends Component {

  state = {
    countries: null,
    pickedCountryFrom: null, 
    pickedCountryTo: null,
    showFromInput: true,
    showToInput: false

  }

  componentDidMount() {
    axios.get( 'https://restcountries.eu/rest/v2/all?fields=name' )
      .then( res => {
        let countries = res.data.map( country => {
          return country.name
        })
        this.setState( { countries: countries } )
      } )
  }

  countryTo = ( country ) => {
      this.setState( { 
        pickedCountryTo: country, 
        showToInput: false
       } )
  }

  countryFrom = ( country ) => {
      this.setState( { 
        pickedCountryFrom: country, 
        showFromInput: false,
        showToInput: true
       } )
  }


  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <InputForm
            countries={this.state.countries}
            showFromInput={this.state.showFromInput}
            showToInput={this.state.showToInput}
            countryFrom={this.countryFrom} 
            countryTo={ this.countryTo } 
            pickedCountryFrom= {this.state.pickedCountryFrom } 
            pickedCountryTo= {this.state.pickedCountryTo } 
          />
          <br></br>
          <button onClick={this.makeRequestForData}> Lets Go! </button>
        </header>
      </div>
    );
  }
}

export default App;
