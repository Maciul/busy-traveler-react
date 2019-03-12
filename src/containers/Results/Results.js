import React, { Component } from 'react';
import axios from 'axios'
import FlickrAPI from '../../components/FlickrAPI/FlickrAPI'

class Results extends Component {

	
	render() {
		return (
			<div> 
				<FlickrAPI
					countryTo="Poland"
				/>
			</div>
		)
	}
}

export default Results;