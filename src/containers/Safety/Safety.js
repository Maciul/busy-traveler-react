import React, { Component } from 'react';
// import classes from './InputForm.css';
import {
	Container, Row, Col, Image,
} from 'react-bootstrap';
import axios from 'axios';
import styles from './Safety.module.css';
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

	riskIndex = (safetyScore) => {
		switch (true) {
			case safetyScore < 2.5:
				return 'low';
			case safetyScore < 3.5:
				return 'medium';
			case safetyScore < 4.5:
				return 'high';
			case safetyScore < 5:
				return 'extreme';
			default:
				return 'none';
		}
	}

	render() {
		const riskScore = this.riskIndex(this.state.travelAdvisory.score);
		const advisoryInfo = this.state.tugo.advisories && this.state.tugo.advisories.description;
		return (
			<Container className="shadow p-3 mb-5 bg-white rounded">
				<Row>
					<Col className={styles.dangerImage}>
						<Image src={`../../images/icons/danger-${riskScore}.png`} />
					</Col>
					<Col xs={10}>
						<p className={styles.advisoryInfo}> {advisoryInfo} </p>
						
					</Col>
				</Row>
				<Row>
					<Col>
					</Col>
					<Col xs={5}>
						<div className={styles.ratingInfo}>
							<h3> Rating: </h3>
							<h4> <b>{this.state.travelAdvisory.score}</b> / 5.0 </h4>
						</div>
					</Col>
					<Col xs={5}>
						<div className={styles.ratingInfo}>
							<h3> Sources: </h3>
							<p> Based on {this.state.travelAdvisory.sources_active} different sources </p>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RestCountriesAPI;
