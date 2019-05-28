import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * AR: One of the issues with using these inline components is that they make their own stylesheet a piece.  Check your
 * head document.
*/
import './Results.css';
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI';
import RestCountriesAPI from '../../components/RestCountriesAPI/RestCountriesAPI';
import WorldBankAPI from '../../components/WorldBankAPI/WorldBankAPI';


class Results extends Component {
	constructor(props) {
		super(props); // AR: Unnecessary here could still just be a state declaration

		const params = new URLSearchParams(this.props.location.search);
		
		/**
		 * AR
		 * Since this is called only on mount, is there any benefit to using the URLSearchParams object as opposed to
		 * destructurings
		 */
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
			// AR: Unnecessaty Fragment Syntax?
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
