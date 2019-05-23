import React, { Component } from 'react';
import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar expand="lg" bg="light" variant="light">
    			<Navbar.Brand href="/" className="mr-auto">
				      <img
				        src="../../images/noun_Traveler_1914086.png"
				        width="75"
				        height="75"
				        className="d-inline-block rounded"
				        alt="Busy Traveler Logo"
				      	/>
					{'Busy Traveler'}
    			</Navbar.Brand>
  			</Navbar>
		)
	}
}

export default Header;