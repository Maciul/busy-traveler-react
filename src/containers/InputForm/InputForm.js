import React, { Component } from 'react';
import axios from 'axios'
import TypeAhead from '../../components/InputForm/InputForm'

class InputForm extends Component {
	
state = {
    countries: null,
    countryToAlpha3Code: {},
    pickedCountryFromText: null, 
    pickedCountryToText: null,
    pickedCountryFromCode: null, 
    pickedCountryToCode: null,
    showFromInput: true,
    showToInput: false,
  }

  countryTo = ( country ) => {
      this.setState( { 
        pickedCountryToText: country, 
        pickedCountryToCode: this.state.countryToAlpha3Code[ country ],
        showToInput: false
       } )
  }

  countryFrom = ( country ) => {
      this.setState( { 
        pickedCountryFromText: country, 
        pickedCountryFromCode: this.state.countryToAlpha3Code[ country ],
        showFromInput: false,
        showToInput: true
       } )
  }

  getResults = () => {
  	const queryString = `?departingCountry=${this.state.pickedCountryFromText}&arrivalCountry=${this.state.pickedCountryToText}&departureCountryCode=${this.state.pickedCountryFromCode}&arrivalCountryCode=${this.state.pickedCountryToCode}`;
	this.props.history.push({
	pathname: '/results',
	search: queryString
        });
  }

	componentDidMount() {
		console.log( "Input Forms: Did Mount" );
	    axios.get( 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code' )
	      .then( res => {
	        let countries = []
	        let countryToAlpha3Code = {} 
	        res.data.forEach( country => {
	        	countries.push( country.name )
	        	countryToAlpha3Code[country.name] = country.alpha3Code
	        })
	        this.setState( { countries: countries, countryToAlpha3Code: countryToAlpha3Code } )
	      } )
	  }

	shouldComponentUpdate() {
		console.log( 'Input Forms: ShouldUpdate', this.props );
		return true
	}

	getSnapshotBeforeUpdate( prevProps, prevState, snapshot ) {
		console.log( 'Input Forms: getSnapshotBeforeUpdate', 'prevProps', prevProps, 'prevState', prevState,'snapshot', snapshot );
		return null;
		
	}

	componentDidUpdate() {
		console.log( "Input Forms: DidUpdate" );
	}

	componentWillUnmount() {
		console.log( "Input Forms: WillUnmount" );
	}

	render() {
		console.log( "Input Form Render" );
		return (
				<TypeAhead
		            countries={this.state.countries}
		            showFromInput={this.state.showFromInput}
		            showToInput={this.state.showToInput}
		            countryFrom={this.countryFrom} 
		            countryTo={ this.countryTo } 
		            pickedCountryFrom= {this.state.pickedCountryFrom } 
		            pickedCountryTo= {this.state.pickedCountryTo } 
		            lfg= { this.getResults }
				/>
		)
	}
}

export default InputForm;