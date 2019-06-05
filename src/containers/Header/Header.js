import React from 'react';
import {
	Navbar,
} from 'react-bootstrap';
import './Header.css';

const Header = () => (
	<Navbar expand="lg" bg="newcolor" variant="dark">
		<Navbar.Brand href="/" className="mr-auto">
				      <img
				        src="../../images/noun_bee_2323015.png"
				        width="75"
				        height="75"
				        className="d-inline-block rounded"
				        alt="Busy Traveler Logo"
				      />
			Busy Traveler
		</Navbar.Brand>
	</Navbar>
);

export default Header;
