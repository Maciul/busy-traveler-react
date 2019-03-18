import React, {Component} from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './FlickrAPI.css';

class FlickrAPI extends Component {

  state = {
    photos: []
  }

  componentDidMount( props ) {
    console.log( "FLICKRS: Did Mount", this.props )
      axios.get( `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6046bd3b0b0209c90dcfb95e499d4248&text=${this.props.arrival}&sort=relevance&format=json&content_type=1&nojsoncallback=1&per_page=9` )
        .then( res => {
          let flickrPhotos = res.data.photos.photo.map( photo => {
            return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          } )
          this.setState( { photos: flickrPhotos } )
        } )
    }
  

  shouldComponentUpdate() {
    console.log( 'FLICKR: ShouldUpdate', this.props );
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log( 'FLICKR: getSnapshotBeforeUpdate', prevProps, prevState );
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log( "FLICKR: DidUpdate", prevProps, prevState, snapshot );
  }

  render() {
    const displayAmazingPhotos = this.state.photos.map( (photoLink, index ) => {
      return <div className="cell" key={index}><img src={photoLink} alt="" key={index} className="responsive"/></div>
    } )

    return (

      <section className="gallery"> 
          <p> Photos </p>
        <div className="grid">
              {displayAmazingPhotos}
        </div>
      </section>
    )
  }
}

export default FlickrAPI;