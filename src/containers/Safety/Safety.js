import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import StatDisplay from '../../components/StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrival: {},
		departure: {},
		data: {},
		isLoading: true,
	}

	componentDidMount() {
		// const { departureCode } = this.props;

		// axios.get(`https://www.reisewarnung.net/api?country=${departureCode}`)
		// 	.then((res) => {
		// 		console.log(res);
		// 		// this.setState({ arrival: res.data[0], departure: res.data[1], isLoading: false });
		// 	});
		fetch('https://www.travel-advisory.info/api', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => {
				console.log(res.json());
			});
	}

	render() {
		// const {
		// 	arrival, departure, worldBank, isLoading,
		// } = this.state;
		// const { arrivalCode, departureCode } = this.props;
		return (
			<Container>
				<Row className="shadow-sm p-3 mb-5 bg-white rounded">
					<Col>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RestCountriesAPI;
