import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * AR: One of the issues with using these inline components is that they make their own stylesheet a piece.  Check your
 * head document.
*/
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CountryStats from '../CountryStats/CountryStats';
import Safety from '../Safety/Safety';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


// eslint-disable-next-line react/prefer-stateless-function
class Results extends Component {
	render() {
		const { arrival, departure } = this.props;
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
							toAlpha3={arrival.alpha3}
							fromAlpha3={departure.alpha3}
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
						<Safety toAlpha2={arrival.alpha2} />
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
							arrival={arrival.name}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		arrival: state.countries[state.countryArrival],
		departure: state.countries[state.countryDeparture],
	};
}

export default connect(mapStateToProps)(Results);
