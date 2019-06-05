import React from 'react';
import {
	Navbar,
} from 'react-bootstrap';
import styles from './Header.module.css';

const navbarClasses = `d-inline-block ${styles.rounded}`;

const Header = () => (
	<Navbar expand="lg" style={{ backgroundColor: '#0d4782' }} variant="dark">
		<Navbar.Brand href="/" className="mr-auto">
				      <img
				        src="../../images/noun_bee_2323015.png"
				        width="75"
				        height="75"
				        className={navbarClasses}
				        alt="Busy Traveler Logo"
				      />
			Busy Traveler
		</Navbar.Brand>
	</Navbar>
);

export default Header;
