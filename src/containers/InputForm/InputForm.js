import React, { Component } from 'react';
import axios from 'axios'
import TypeAhead from '../../components/InputForm/InputForm'

class InputForm extends Component {
	
state = {
    countries: null,
    pickedCountryFrom: null, 
    pickedCountryTo: null,
    showFromInput: true,
    showToInput: false

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

  getResults = () => {
  	const queryString = `?departingCountry=${this.state.pickedCountryFrom}&arrivalCountry=${this.state.pickedCountryTo}`;
	this.props.history.push({
	pathname: '/results',
	search: queryString
        });
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
  	
  	componentWillReceiveProps() {
		console.log( 'input forms receiving props', this.props );
	}

	componentWillUnmount() {
		console.log( 'inputforms are unmounting' );
	}

	componentDidUpdate() {
		console.log( "inputforms component update" );
	}

	render() {
		console.log( this.props )
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