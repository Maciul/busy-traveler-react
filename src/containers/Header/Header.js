import React, { Component } from 'react';
import './Header.css';



class Header extends Component {

	shouldComponentUpdate() {
		console.log( 'Header: ShouldUpdate', this.props );
		return true;
	}

	getSnapshotBeforeUpdate( prevProps, prevState, snapshot ) {
		console.log( 'Header: getSnapshotBeforeUpdate' );
	}

	componentDidUpdate() {
		console.log( "Header: DidUpdate" );
	}

	componentWillUnmount() {
		console.log( "Header: WillUnmount" );
	}

	getDerivedStateFromProps( props, state ) {
  		console.log( "Header: getDerivedStateFromProps", props, state )
  }
	
	render() {
		return (
			<header className="headerStyle">
				<div className="headerTitle"> 
					<h1>Busy Traveler: </h1>
					<p> “Traveling – it leaves you speechless, then turns you into a storyteller.” </p>
				</div>
			</header>
		)
	}
}

export default Header;