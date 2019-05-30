import React, { Component } from 'react';
import axios from 'axios';
import DisplayPhotos from '../../components/DisplayPhotos/DisplayPhotos';

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
		return (
			  <DisplayPhotos
				isLoading={this.state.isLoading}
				photoArray={this.state.photos}
			  />
		);
	}
}

export default FlickrAPI;
