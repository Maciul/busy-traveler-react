// import { combineReducers } from 'redux';
import {
	ADD_COUNTRY_ARRIVE,
	ADD_COUNTRY_DEPART,
	ADD_COUNTRY_CODE_ARRIVE,
	ADD_COUNTRY_CODE_DEPART,
	ADD_TEXT,
} from '../actions/actions';

const initialState = {
	countries: null,
	countryToAlpha3Code: {},
	countryArrival: {},
	countryDeparture: {},
	showFromInput: true,
	showToInput: false,
	text: 'hello',
};

const addCountryArrive = (state = initialState, action) => ({
	...state,
	countryArrival: {
		name: action.country,
	},
});

const addCountryDepart = (state = initialState, action) => ({
	...state,
	countryDeparture: {
		name: action.country,
	},
});

const addCountryCodeArrive = (state = initialState, action) => ({
	...state,
	countryArrival: {
		code: action.country,
	},
});

const addCountryCodeDepart = (state = initialState, action) => ({
	...state,
	countryDepart: {
		code: action.country,
	},
});

const addText = (state = initialState, action) => ({
	...state,
	text: action.text,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COUNTRY_ARRIVE: return addCountryArrive(state, action);
		case ADD_COUNTRY_DEPART: return addCountryDepart(state, action);
		case ADD_COUNTRY_CODE_ARRIVE: return addCountryCodeArrive(state, action);
		case ADD_COUNTRY_CODE_DEPART: return addCountryCodeDepart(state, action);
		case ADD_TEXT: return addText(state, action);
		default: return state;
	}
};

export default reducer;
