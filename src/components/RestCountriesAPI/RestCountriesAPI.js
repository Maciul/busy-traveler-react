import React, { Component } from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './RestCountriesAPI.css';
import StatDisplay from '../StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		country: {},
	}

	componentDidMount() {
		console.log('REST: Did Mount', this.props);
		axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${this.props.arrival};${this.props.departure}`)
			.then((res) => {
				console.log('response', res);
				const countryData = res.data[0];
				this.setState({ country: countryData });
			});
	}

	render() {
		const {
			currencies, population, flag, capital, nativeName, region, subregion,
		} = this.state.country;
		
		let currencyList = [];
		if (currencies) {
			currencyList = currencies.map((currency, index) => (
				<li key={index}>{currency.name}
					<ul>
						<li> Code: {currency.code} </li>
						<li> Symbol: {currency.symbol} </li>
					</ul>
				</li>
			));
		}
	
		return (
			<section>
				<StatDisplay
					name="population"
					stat={population}
				/>
				<p> Info: </p>
				<div className="holder">
					<div className="country">
						<img src={flag} alt="" />
					</div>
					<div className="info">
						<p> Capital: { capital }</p>
						<p> Currencies: </p>
						<ul>
							{ currencyList }
						</ul>
						<p> Native Name: { nativeName }</p>
						<p> Region: { region }</p>
						<p> Sub-Region: { subregion }</p>
						<p> Population: { population && (population).toLocaleString('en') }</p>
					</div>
				</div>
			</section>
		);
	}
}

export default RestCountriesAPI;
