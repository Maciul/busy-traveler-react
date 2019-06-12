import * as ActionTypes from './actionTypes';
/*
 * action creators
 */

/**
 * AR: I Would checkout Flux Standard Actions.  Consistent shapes of { type, payload, meta, error } (if applicable)
 */

export function addCountryList(countryList) {
	return {
		type: ActionTypes.ADD_COUNTRY_LIST,
		payload: countryList,
	};
}

export function addCountryDepart(country) {
	return {
		type: ActionTypes.ADD_COUNTRY_DEPART,
		payload: country,
	};
}

export function addCountryArrive(country) {
	return {
		type: ActionTypes.ADD_COUNTRY_ARRIVE,
		payload: country,
	};
}

export function addArriveAlpha2(countryCode) {
	return {
		type: ActionTypes.ADD_ARRIVE_ALPHA_2,
		payload: countryCode,
	};
}

export function addDepartAlpha2(countryCode) {
	return {
		type: ActionTypes.ADD_DEPART_ALPHA_2,
		payload: countryCode,
	};
}

export function addText(text) {
	return {
		type: ActionTypes.ADD_TEXT,
		payload: text,
	};
}
