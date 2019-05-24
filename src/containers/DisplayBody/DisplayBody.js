import React from 'react';
import './DisplayBody.css';

const DisplayBody = (props) => (
	<section className="App-main">
		{ props.children }
	</section>
);

export default DisplayBody;
