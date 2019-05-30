
import React from 'react';
import styles from './SectionTitle.module.css';
console.log(styles);
const StatDisplay = (props) => {
	const { title } = props;
	
	return (
		<h3 className={styles.title}> {title} </h3>
	);
};

export default StatDisplay;
