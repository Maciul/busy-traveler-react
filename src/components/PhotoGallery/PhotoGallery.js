
import React from 'react';
// import { Image } from 'react-bootstrap';
import styles from './PhotoGallery.module.css';


const PhotoGallery = (props) => {
	console.log('photo gall', props);
	
	return (
		<React.Fragment>
			<p> Photos </p>
			<div className={styles.grid}>
				{ props.photoArray.map((link) => (
					<div className={styles.item} style={{ backgroundImage: `url(${link})` }} />
				)) }
			</div>
		</React.Fragment>
	);
};

export default PhotoGallery;
