// import { combineReducers } from 'redux';

import {
	ADD_COUNTRY_ARRIVE,
	ADD_COUNTRY_DEPART,
	ADD_ARRIVE_ALPHA_2,
	ADD_DEPART_ALPHA_2,
	ADD_TEXT,
} from '../actions/actionTypes';

const initialState = {
	countries: null,
	countryToAlpha3Code: {},
	countryArrival: {},
	countryDeparture: {},
	showFromInput: true,
	showToInput: false,
	text: 'hello',
};

const addCountryArrive = (state = initialState, payload) => ({
	...state,
	countryArrival: {
		name: payload,
	},
});

const addCountryDepart = (state = initialState, payload) => ({
	...state,
	countryDeparture: {
		name: payload,
	},
});

const addCountryCodeArrive = (state = initialState, payload) => ({
	...state,
	countryArrival: {
		code: payload,
	},
});

const addCountryCodeDepart = (state = initialState, payload) => ({
	...state,
	countryDepart: {
		code: payload,
	},
});

const addText = (state = initialState, payload) => ({
	...state,
	text: payload,
});

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_COUNTRY_ARRIVE: return addCountryArrive(state, payload);
		case ADD_COUNTRY_DEPART: return addCountryDepart(state, payload);
		case ADD_ARRIVE_ALPHA_2: return addCountryCodeArrive(state, payload);
		case ADD_DEPART_ALPHA_2: return addCountryCodeDepart(state, payload);
		case ADD_TEXT: return addText(state, payload);
		default: return state;
	}
};

export default reducer;
