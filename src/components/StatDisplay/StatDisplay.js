
import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './StatDisplay.module.css';
import WithLoading from '../../hoc/WithLoading/WithLoading';

const StatDisplay = (props) => {
	const {
		name, statOne, statTwo, imageOne, imageTwo,
	} = props;
	const difference = (statTwo - statOne);
	const formattedStatOne = statOne && typeof statOne === 'number' ? statOne.toLocaleString() : statOne;
	const formattedStatTwo = statTwo && typeof statTwo === 'number' ? statTwo.toLocaleString() : statTwo;
	
	return (
		<React.Fragment>
			<div className={styles.statContainer}>
				<h3 className={styles.statTitle}> {name} </h3>
				<p><Image className={styles.imageSize} src={imageOne} thumbnail /> {formattedStatOne} </p>
				<p><Image className={styles.imageSize} src={imageTwo} thumbnail /> {formattedStatTwo} </p>
				<p className={difference > 0 ? styles.green : styles.red}> { Math.abs(difference).toLocaleString() } </p>
			</div>
		</React.Fragment>
	);
};

export default WithLoading(StatDisplay);
