import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { addCountryList, addCountryDepart, addCountryArrive } from '../../store/actions/actions';
import InputFormLogic from '../InputForm/InputForm';
import './MainPage.css';


class MainPage extends Component {
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
			});
					
			// AR: Loading States Could Be Handled with this too
			this.setState({ countries });
			this.props.addCountryList(countries);
		  });
	  }

	countryTo = (country) => {
		this.setState((prevState) => ({
			pickedCountryToText: country,
			toAlpha2: prevState.countries[country].alpha2,
			toAlpha3: prevState.countries[country].alpha3,
			showToInput: false,
		}));
	}

	countryFrom = (country) => {
		// AR: No need to use prevState if you aren't referencing state in the change.
		this.setState((prevState) => ({
			pickedCountryFromText: country,
			fromAlpha2: prevState.countries[country].alpha2,
			fromAlpha3: prevState.countries[country].alpha3,
			showFromInput: false,
			showToInput: true,
		}));
	}

	getResults = () => {
		const {
			pickedCountryFromText, pickedCountryToText,
		} = this.state;
		this.props.addCountryDepart(pickedCountryFromText);
		this.props.addCountryArrive(pickedCountryToText);

		/* eslint-disable-next-line max-len */
		 // APP IS BROKEN AT THE MOMENT - NEED TO HOOK UP REDUX TO RESULTS PAGE.
		this.props.history.push({ pathname: '/results' });
	}

	  render() {
		return (
			<React.Fragment>
				<div>
					<h1 className="addTitleFont"> Busy Traveler </h1>
					<InputFormLogic
						showFromInput={this.state.showFromInput}
						showToInput={this.state.showToInput}
						countryFrom={this.countryFrom}
						countryTo={this.countryTo}
						lfg={this.getResults}
					/>
				</div>
				<div>
					<Image src="http://pngriver.com/wp-content/uploads/2018/04/Download-World-Map.png" />
				</div>
			</React.Fragment>
		);
	  }
}

function mapDispatchToProps(dispatch) {
	return {
		addCountryList: (countryList) => dispatch(addCountryList(countryList)),
		addCountryDepart: (country) => dispatch(addCountryDepart(country)),
		addCountryArrive: (country) => dispatch(addCountryArrive(country)),
	};
}

const ConnectedMainPage = connect(null, mapDispatchToProps)(MainPage);

export default ConnectedMainPage;
