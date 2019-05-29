import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './CountryStats.css';
import StatDisplay from '../StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrival: {},
		departure: {},
		worldBank: {},
		isLoading: true,
	}

	componentDidMount() {
		const { arrivalCode, departureCode } = this.props;

		axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${arrivalCode};${departureCode}`)
			.then((res) => {
				this.setState({ arrival: res.data[0], departure: res.data[1], isLoading: false });
			});

		const url = `https://api.worldbank.org/v2/country/${arrivalCode};${departureCode}/indicator/PA.NUS.PPPC.RF?format=json&date=2017`;
		axios.get(url)
			.then((res) => {
				const wbData = {};
				res.data[1].forEach((data) => {
					wbData[data.countryiso3code] = data.value;
				});
				this.setState({ worldBank: wbData });
			});
	}

	render() {
		const {
			arrival, departure, worldBank, isLoading,
		} = this.state;
		const { arrivalCode, departureCode } = this.props;
		return (
			<Container>
				<Row>
					<Col>
						<StatDisplay
							name="Purchasing Power Parity"
							statOne={worldBank[departureCode]}
							statTwo={worldBank[arrivalCode]}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
							isLoading={isLoading}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="Population"
							statOne={departure.population}
							statTwo={arrival.population}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
							isLoading={isLoading}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="Area"
							statOne={departure.area}
							statTwo={arrival.area}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
							isLoading={isLoading}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="Gini coefficient"
							statOne={departure.gini}
							statTwo={arrival.gini}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
							isLoading={isLoading}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RestCountriesAPI;
