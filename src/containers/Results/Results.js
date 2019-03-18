import React, { Component } from 'react';
import './Results.css';
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI'
import RestCountriesAPI from '../../components/RestCountriesAPI/RestCountriesAPI'
import WorldBankAPI from '../../components/WorldBankAPI/WorldBankAPI'



class Results extends Component {
	constructor( props ) {
		super( props )

		const params = new URLSearchParams( this.props.location.search ); 
		
		
		this.state = {
			departure: params.get('departingCountry'),
			arrival: params.get( 'arrivalCountry'),
			departureCode: params.get('departureCountryCode'), 
			arrivalCode: params.get('arrivalCountryCode')
		}

}


	shouldComponentUpdate() {
		console.log( 'Results: ShouldUpdate', this.props );
		return true;
	}

	getSnapshotBeforeUpdate( prevProps, prevState, snapshot ) {
		console.log( 'Results: getSnapshotBeforeUpdate' );
	}

	componentDidUpdate() {
		console.log( "Results: DidUpdate" );
	}

	componentWillUnmount() {
		console.log( "Results: WillUnmount" );
	}

	getDerivedStateFromProps( props, state ) {
  		console.log( "Results: getDerivedStateFromProps", props, state )
  }
	
	render() {
		console.log( 'results state', this.state, this.state.arrival )
		return (
			<div className="resultsMain">
				<RestCountriesAPI
					arrival={this.state.arrival}
				/> 
				<FlickrAPI
					arrival={this.state.arrival}
				/>
				<WorldBankAPI
					arrivalCode={this.state.arrivalCode}
					departureCode={this.state.departureCode}
				/>
			</div>
		)
	}
}

export default Results;