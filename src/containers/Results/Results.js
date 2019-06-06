import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * AR: One of the issues with using these inline components is that they make their own stylesheet a piece.  Check your
 * head document.
*/
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CountryStats from '../CountryStats/CountryStats';
import Safety from '../Safety/Safety';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


class Results extends Component {
	constructor(props) {
		super(props); // AR: Unnecessary here could still just be a state declaration

		const params = new URLSearchParams(this.props.location.search);

		this.state = {
			departure: params.get('departingCountry'),
			arrival: params.get('arrivalCountry'),
			departureCode: params.get('departureCountryCode'),
			arrivalCode: params.get('arrivalCountryCode'),
			alpha2: params.get('alpha2'),
		};
	}
	
	render() {
		console.log(this.state);
		return (
			<Container className="results">
				<Row>
					<Col>
						<SectionTitle title="Comparison Stats" />
					</Col>
				</Row>
				<Row>
					<Col>
						<CountryStats
							arrivalCode={this.state.arrivalCode}
							departureCode={this.state.departureCode}
						/>
					</Col>

				</Row>
				<Row>
					<Col>
						<SectionTitle title="Safety" />
					</Col>
				</Row>
				<Row>
					<Col>
						<Safety departureCode={this.state.alpha2} />
					</Col>
				</Row>
				<Row>
					<Col>
						<SectionTitle title="Photos" />
					</Col>
				</Row>
				<Row>
					<Col>
						<PhotoGallery
							arrival={this.state.arrival}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Results;
