import React, {Component} from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './FlickrAPI.css';

class FlickrAPI extends Component {

  state = {
    photos: []
  }

  componentDidMount( props ) {
    console.log( this.props, props )
      axios.get( `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6046bd3b0b0209c90dcfb95e499d4248&tags=${this.props.arrival};architecture&sort=relevance&accuracy=3&format=json&content_type=1&nojsoncallback=1&per_page=10&in_gallery=true&tag_mode=AND` )
        .then( res => {
          let flickrPhotos = res.data.photos.photo.map( photo => {
            return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          } )
          this.setState( { photos: flickrPhotos } )
        } )
    }

  componentWillReceiveProps() {
    console.log( "Flickr API" )
  }

  render() {
    const displayAmazingPhotos = this.state.photos.map( (photoLink, index ) => {
      return <div className="cell" key={index}><img src={photoLink} alt="" key={index} className="responsive"/></div>
    } )

    return (

      <div className="gallery"> 
          <h1> Photos of { this.props.countryTo } </h1>
        <div className="grid">
              {displayAmazingPhotos}
        </div>
      </div>
    )
  }
}

export default FlickrAPI;