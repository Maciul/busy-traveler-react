import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
var Typeahead = require('react-typeahead').Typeahead;

class Autocomplete extends Component {
	static propTypes = {
		suggestions: PropTypes.instanceOf(Array)
	};

	static defaultProps = {
		suggestions: []
	}
}