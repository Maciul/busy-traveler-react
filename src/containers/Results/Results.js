import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Results.css';
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI';
import RestCountriesAPI from '../../components/RestCountriesAPI/RestCountriesAPI';
import WorldBankAPI from '../../components/WorldBankAPI/WorldBankAPI';


class Results extends Component {
	constructor(props) {
		super(props);

		const params = new URLSearchParams(this.props.location.search);
		
		
		this.state = {
			departure: params.get('departingCountry'),
			arrival: params.get('arrivalCountry'),
			departureCode: params.get('departureCountryCode'),
			arrivalCode: params.get('arrivalCountryCode'),
		};
	}
	
	render() {
		// console.log('results state', this.state, this.state.arrival);
		return (
			<>
			<Container className="results">
				<Row>
					<Col>
						<RestCountriesAPI
							arrival={this.state.arrivalCode}
							departure={this.state.departureCode}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<WorldBankAPI
							arrivalCode={this.state.arrivalCode}
							departureCode={this.state.departureCode}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg><FlickrAPI
						arrival={this.state.arrival}
					/>
					</Col>
				</Row>
			</Container>
			</>
		);
	}
}

export default Results;
