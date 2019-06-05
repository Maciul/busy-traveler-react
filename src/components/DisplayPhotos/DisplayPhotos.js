
import React from 'react';
// import { Image } from 'react-bootstrap';
import styles from './DisplayPhotos.module.css';
import WithLoading from '../../hoc/WithLoading/WithLoading';

const PhotoGallery = (props) => (
	<React.Fragment>
		<div className={styles.grid}>
			{ props.photoArray.map(({ url, id }) => (
				<div key={id} className={`${styles.item} ${styles.animated}`} style={{ backgroundImage: `url(${url})` }} />
			)) }
		</div>
	</React.Fragment>
);

export default WithLoading(PhotoGallery);
