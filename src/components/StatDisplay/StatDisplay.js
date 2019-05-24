
import React from 'react';
import styles from './StatDisplay.css';

const StatDisplay = (props) => {
	console.log(styles);
	const { name, stat } = props;
	const statnumber = stat && typeof stat === 'number' ? stat.toLocaleString() : stat;
    
	return (
		<React.Fragment>
			<h3 className={styles.hello}> {name} </h3>
			<span> {stat || statnumber} </span>
		</React.Fragment>
	);
};

export default StatDisplay;
