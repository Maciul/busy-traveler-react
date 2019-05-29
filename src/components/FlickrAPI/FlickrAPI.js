import React, { Component } from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
// import './FlickrAPI.css';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

class FlickrAPI extends Component {
	state = {
		photos: [],
		isLoading: true,
	}
	
	componentDidMount() {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6046bd3b0b0209c90dcfb95e499d4248&text=${this.props.arrival}&sort=relevance&format=json&content_type=1&nojsoncallback=1&per_page=9`)
			.then((res) => {
				const flickrPhotos = res.data.photos.photo.map((photo) => ({
					url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
					id: photo.id,
				}));
				this.setState({ photos: flickrPhotos, isLoading: false });
			});
	}

	render() {
		// const displayAmazingPhotos = this.state.photos.map((photoLink, index) => (
		// 	<div className="cell" key={index}><img src={photoLink} alt="" key={index} className="responsive" /></div>
		// ));
		return (
			  <PhotoGallery
				isLoading={this.state.isLoading}
				photoArray={this.state.photos}
			  />
		);
	}
}

export default FlickrAPI;
