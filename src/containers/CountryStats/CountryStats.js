import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './CountryStats.css';
import StatDisplay from '../../components/StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrival: {},
		departure: {},
		worldBank: {},
		isLoading: true,
	}

	componentDidMount() {
		const { toAlpha3, fromAlpha3 } = this.props;
		// TODO: cleanup the requests, utilize axios.all here.
		axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${toAlpha3};${fromAlpha3}`)
			.then((res) => {
				this.setState({ arrival: res.data[0], departure: res.data[1], isLoading: false });
			});

		const url = `https://api.worldbank.org/v2/country/${toAlpha3};${fromAlpha3}/indicator/PA.NUS.PPPC.RF?format=json&date=2017`;
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
		const { toAlpha3, fromAlpha3 } = this.props;
		return (
			<Container>
				<Row className="shadow-sm p-3 mb-5 bg-white rounded">
					<Col>
						<StatDisplay
							name="Purchasing Power Parity"
							statOne={worldBank[fromAlpha3]}
							statTwo={worldBank[toAlpha3]}
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
