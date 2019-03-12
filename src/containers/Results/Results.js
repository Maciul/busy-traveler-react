import React, { Component } from 'react';
import axios from 'axios'
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI'

class Results extends Component {
	state = {
		departure: null,
		arrival: null,
		departureCode: null, 
		arrivalCode: null
	}

	componentWillMount () {
		const params = new URLSearchParams( this.props.location.search ); 
		
		this.setState( { 
			departure : params.get('departingCountry'),
			arrival : params.get( 'arrivalCountry')
		} );
	}

	componentWillReceiveProps() {
		console.log( 'results receiving props', this.props );
	}

	componentWillUnmount() {
		console.log( 'results are unmounting' );
	}

	componentDidUpdate() {
		console.log( "component update" );
	}
	
	render() {
		console.log( 'results state', this.state, this.state.arrival )
		return (
			<div> 
				<FlickrAPI
					arrival={this.state.arrival}
					departure={this.state.departure}
				/>
			</div>
		)
	}
}

export default Results;