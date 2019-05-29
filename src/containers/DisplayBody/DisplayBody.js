import React from 'react';
import './DisplayBody.css';

// AR: ({ children }) => a bit simpler of a pattern (explicit prop destructuring);
const DisplayBody = ({ children }) => (
	<section className="App-main">
		{ children }
	</section>
);

export default DisplayBody;
