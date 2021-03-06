import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import classes from './InputForm.module.css';

const { Typeahead } = require('react-typeahead');

const inputForm = (props) => (
	<div className={classes.wrapper}>
		<section className={props.showFromInput ? classes.show : classes.hide}>
			<Typeahead
				options={props.countryList}
				maxVisible={10}
				placeholder="Where from?"
				onOptionSelected={(country) => props.countryFrom(country)}
			/>
		</section>

		<section className={props.showToInput ? classes.show : classes.hide}>
			<Typeahead
				options={props.countryList}
				maxVisible={10}
				placeholder="Where to?"
				onOptionSelected={(country) => props.countryTo(country)}
			/>
		</section>

		<section className={!props.showToInput && !props.showFromInput ? classes.show : classes.hide}>
			<Button variant="light" onClick={props.lfg} size="lg">Lets Roll</Button>
		</section>
	</div>
);

const mapStateToProps = (state) => ({
	countryList: Object.keys(state.countries),
});

export default connect(mapStateToProps)(inputForm);
