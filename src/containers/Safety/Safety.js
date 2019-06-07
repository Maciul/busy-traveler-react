import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import StatDisplay from '../../components/StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrival: {},
		departure: {},
		travelAdvisory: {},
		tugo: {},
		isLoading: true,
	}

	componentDidMount() {
		const { toAlpha2 } = this.props;
		axios.get(`https://www.travel-advisory.info/api?countrycode=${toAlpha2}`)
			.then((res) => {
				this.setState({ travelAdvisory: res.data.data[toAlpha2].advisory });
			});

		axios({
			method: 'get',
			url: `https://api.tugo.com/v1/travelsafe/countries/${toAlpha2}`,
			headers: {
				'X-Auth-API-Key': 'hhzg22dmn5gvt89hqk8f3tyt',
			},
		})
			.then((res) => {
				this.setState({ tugo: res.data });
			});
	}

	render() {
		console.log(this.state.tugo);
		const advisoryInfo = this.state.tugo.advisories && this.state.tugo.advisories.description;
		return (
			<Container>
				<Row className="shadow-sm p-3 mb-5 bg-white rounded">
					<Col>
						<p> Rating: {this.state.travelAdvisory.score} / 5.0 </p>
						<p> Information gathered from {this.state.travelAdvisory.sources_active} sources</p>
						<p> {this.state.tugo.name}: {advisoryInfo} </p>
						<p> More info to come soon... </p>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RestCountriesAPI;
