// import { combineReducers } from 'redux';

import {
	ADD_COUNTRY_LIST,
	ADD_COUNTRY_ARRIVE,
	ADD_COUNTRY_DEPART,
} from '../actions/actionTypes';

const initialState = {
	countries: [],
	countryArrival: {},
	countryDeparture: {},
};

const addCountryList = (state = initialState, payload) => ({
	...state,
	countries: payload,
});

const addCountryArrive = (state = initialState, payload) => ({
	...state,
	countryArrival: payload,
});

const addCountryDepart = (state = initialState, payload) => ({
	...state,
	countryDeparture: payload,
});

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_COUNTRY_LIST: return addCountryList(state, payload);
		case ADD_COUNTRY_ARRIVE: return addCountryArrive(state, payload);
		case ADD_COUNTRY_DEPART: return addCountryDepart(state, payload);
		default: return state;
	}
};

export default reducer;
