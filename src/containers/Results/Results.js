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
			fromAlpha3: params.get('fromAlpha3'),
			fromAlpha2: params.get('fromAlpha2'),
			toAlpha3: params.get('toAlpha3'),
			toAlpha2: params.get('toAlpha2'),
		};
	}
	
	render() {
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
							toAlpha3={this.state.toAlpha3}
							fromAlpha3={this.state.fromAlpha3}
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
						<Safety toAlpha2={this.state.toAlpha2} />
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
