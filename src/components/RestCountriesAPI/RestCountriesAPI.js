import React, { Component } from 'react';
// import classes from './InputForm.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './RestCountriesAPI.css';
import StatDisplay from '../StatDisplay/StatDisplay';

class RestCountriesAPI extends Component {
	state = {
		arrivalCountry: {},
		departureCountry: {},
	}

	componentDidMount() {
		axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${this.props.arrival};${this.props.departure}`)
			.then((res) => {
				this.setState({ arrivalCountry: res.data[0], departureCountry: res.data[1] });
			});
	}

	render() {
		const arrival = this.state.arrivalCountry;
		const departure = this.state.departureCountry;
		console.log(this.state);
		return (
			<Container>
				<Row>
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
