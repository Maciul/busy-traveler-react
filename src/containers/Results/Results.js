import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * AR: One of the issues with using these inline components is that they make their own stylesheet a piece.  Check your
 * head document.
*/
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI';
import CountryStats from '../../components/CountryStats/CountryStats';

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
		return (
			<Container className="results">
				<Row>
					<Col xs={{ span: 6, offset: 6 }}> Hello </Col>
				</Row>
				<Row>
					<Col sm={{ span: 12 }}>
						<CountryStats
							arrivalCode={this.state.arrivalCode}
							departureCode={this.state.departureCode}
						/>
					</Col>
					<Col>
						<FlickrAPI
							arrival={this.state.arrival}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Results;
