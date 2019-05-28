import React from 'react';
import './DisplayBody.css';

// AR: ({ children }) => a bit simpler of a pattern (explicit prop destructuring);
const DisplayBody = (props) => (
	<section className="App-main">
		{ props.children }
	</section>
);

export default DisplayBody;
