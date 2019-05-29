import React, { Component } from 'react';
import axios from 'axios';
import InputFormLogic from '../../components/InputForm/InputForm';
import './MainPage.css';

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

componentDidMount() {
	console.log('Input Forms: Did Mount');
	    axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code')
	      .then((res) => {
	        const countries = [];
	        const countryToAlpha3Code = {};
	        res.data.forEach((country) => {
				countries.push(country.name);
				countryToAlpha3Code[country.name] = country.alpha3Code;
			});
					
			// AR: Loading States Could Be Handled with this too
	        this.setState({ countries, countryToAlpha3Code });
	      });
	  }

	countryTo = (country) => {
		this.setState((prevState) => ({
			pickedCountryToText: country,
			pickedCountryToCode: prevState.countryToAlpha3Code[country],
			showToInput: false,
		}));
	}

	countryFrom = (country) => {
		// AR: No need to use prevState if you aren't referencing state in the change.
		this.setState((prevState) => ({
			pickedCountryFromText: country,
			pickedCountryFromCode: prevState.countryToAlpha3Code[country],
			showFromInput: false,
			showToInput: true,
		}));
	}

	getResults = () => {
		const {
			pickedCountryFromText, pickedCountryToText, pickedCountryToCode, pickedCountryFromCode,
		} = this.state;
		/* eslint-disable-next-line max-len */
		const queryString = `?departingCountry=${pickedCountryFromText}&arrivalCountry=${pickedCountryToText}&departureCountryCode=${pickedCountryFromCode}&arrivalCountryCode=${pickedCountryToCode}`;
		/** AR: Could turn this into a utility?
		 * 
		 * const createQuery = (obj) => Object.keys(obj).reduce((carry, key) => {
		 * 		const prefix = carry.length === 1 ? '' : '&';
		 * 		return  `${prefix}${carry}${key}=${obj[key]}
		 * }, '?')
		 * 
		 *
		 */
		this.props.history.push({
			pathname: '/results',
			search: queryString,
		});
	}

	  render() {
		console.log('Input Form Render');
		return (
			<>
				<h1 className="addTitleFont"> Busy Traveler </h1>
				<InputFormLogic
		            countries={this.state.countries}
		            showFromInput={this.state.showFromInput}
		            showToInput={this.state.showToInput}
		            countryFrom={this.countryFrom}
		            countryTo={this.countryTo}
		            pickedCountryFrom={this.state.pickedCountryFrom}
		            pickedCountryTo={this.state.pickedCountryTo}
		            lfg={this.getResults}
				/>
			</>
		);
	  }
}

export default InputForm;
