import React, { Component } from 'react';
import './DisplayBody.css';

class DisplayBody extends Component {
	render() {
		console.log(this.props);
		return (
			<section className="App-main"> 
				{ this.props.children }
			</section>
		)
	}
}

export default DisplayBody;
