import React, { Component } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import InputFormLogic from '../InputForm/InputForm';
import './MainPage.css';


class InputForm extends Component {
// TODO: make this better...
state = {
	countries: null,
	pickedCountryFromText: null,
	pickedCountryToText: null,
	pickedCountryFromCode: null,
	pickedCountryToCode: null,
	showFromInput: true,
	showToInput: false,
}

componentDidMount() {
	axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;alpha2Code')
		  .then((res) => {
			const countries = {};
			res.data.forEach((country) => {
				// const countryObj = {};
				countries[country.name] = {
					name: country.name,
					alpha2: country.alpha2Code,
					alpha3: country.alpha3Code,
				};
				console.log(countries);
				// countries.push(countryObj);
			});
					
			// AR: Loading States Could Be Handled with this too
			this.setState({ countries });
		  });
	  }

	countryTo = (country) => {
		this.setState((prevState) => ({
			pickedCountryToText: country,
			pickedCountryToCode: prevState.countries[country].alpha3,
			showToInput: false,
		}));
	}

	countryFrom = (country) => {
		console.log(country, this.state.countries);
		// AR: No need to use prevState if you aren't referencing state in the change.
		this.setState((prevState) => ({
			pickedCountryFromText: country,
			alpha3: prevState.countries[country].alpha3,
			alpha2: prevState.countries[country].alpha2,
			showFromInput: false,
			showToInput: true,
		}));
	}

	getResults = () => {
		const {
			pickedCountryFromText, pickedCountryToText, pickedCountryToCode, alpha3, alpha2,
		} = this.state;
		console.log(this.state, alpha2);
		/* eslint-disable-next-line max-len */
		const queryString = `?departingCountry=${pickedCountryFromText}&arrivalCountry=${pickedCountryToText}&departureCountryCode=${alpha3}&alpha2=${alpha2}&arrivalCountryCode=${pickedCountryToCode}`;
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
		if (this.state.countries) {
			console.log(Object.keys(this.state.countries));
		}
		const countryList = this.state.countries && Object.keys(this.state.countries);
		console.log(this.state.countries);
		return (
			<>
				<div>
					<h1 className="addTitleFont"> Busy Traveler </h1>
					<InputFormLogic
						countries={countryList}
						showFromInput={this.state.showFromInput}
						showToInput={this.state.showToInput}
						countryFrom={this.countryFrom}
						countryTo={this.countryTo}
						pickedCountryFrom={this.state.pickedCountryFrom}
						pickedCountryTo={this.state.pickedCountryTo}
						lfg={this.getResults}
					/>
				</div>
				<div>
					<Image src="http://pngriver.com/wp-content/uploads/2018/04/Download-World-Map.png" />
				</div>
			</>
		);
	  }
}

export default InputForm;
