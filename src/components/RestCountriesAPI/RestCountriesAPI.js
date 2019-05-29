import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './RestCountriesAPI.css';
import StatDisplay from '../StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrival: {},
		departure: {},
		worldBank: {},
	}

	componentDidMount() {
		const { arrivalCode, departureCode } = this.props;

		axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${arrivalCode};${departureCode}`)
			.then((res) => {
				this.setState({ arrival: res.data[0], departure: res.data[1] });
			});

		const url = `https://api.worldbank.org/v2/country/${arrivalCode};${departureCode}/indicator/PA.NUS.PPPC.RF?format=json&date=2017`;
		axios.get(url)
			.then((res) => {
				console.log('res', res);
				const wbData = {};
				res.data[1].forEach((data) => {
					wbData[data.countryiso3code] = data.value;
				});
				this.setState({ worldBank: wbData });
			});
	}

	render() {
		const { arrival, departure, worldBank } = this.state;
		const { arrivalCode, departureCode } = this.props;
		return (
			<Container>
				<Row>
					<Col>
						<StatDisplay
							name="purchasing power"
							statOne={worldBank[departureCode]}
							statTwo={worldBank[arrivalCode]}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="population"
							statOne={departure.population}
							statTwo={arrival.population}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="area"
							statOne={departure.area}
							statTwo={arrival.area}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
						/>
					</Col>
					<Col>
						<StatDisplay
							name="gini coefficient"
							statOne={departure.gini}
							statTwo={arrival.gini}
							imageOne={departure.flag}
							imageTwo={arrival.flag}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RestCountriesAPI;
