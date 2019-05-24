import React from 'react';
import { Button } from 'react-bootstrap';
import './InputForm.css';

const { Typeahead } = require('react-typeahead');

const inputForm = (props) => (
	<div className="wrapper">
		<section className={props.showFromInput ? 'show' : 'hide'}>
			<Typeahead
				options={props.countries}
				maxVisible={10}
				placeholder="Where From?"
				onOptionSelected={(country) => props.countryFrom(country)}
			/>
		</section>

		<section className={props.showToInput ? 'show' : 'hide'}>
			<Typeahead
				options={props.countries}
				maxVisible={10}
				placeholder="Where to?"
				onOptionSelected={(country) => props.countryTo(country)}
			/>
		</section>

		<section className={!props.showToInput && !props.showFromInput ? 'show' : 'hide'}>
			<Button variant="light" onClick={props.lfg} size="lg">Lets Roll</Button>
		</section>
	</div>
);

export default inputForm;
