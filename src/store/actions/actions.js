/*
 * action types
 */

export const ADD_COUNTRY_DEPART = 'ADD_COUNTRY_DEPART';
export const ADD_COUNTRY_ARRIVE = 'ADD_COUNTRY_ARRIVE';
export const ADD_COUNTRY_CODE_ARRIVE = 'ADD_COUNTRY_CODE_ARRIVE';
export const ADD_COUNTRY_CODE_DEPART = 'ADD_COUNTRY_CODE_DEPART';
export const ADD_TEXT = 'ADD_TEXT';


/*
 * action creators
 */

/**
 * AR: I Would checkout Flux Standard Actions.  Consistent shapes of { type, payload, meta, error } (if applicable)
 */

export function addCountryDepart(country) {
	return { type: ADD_COUNTRY_DEPART, country };
}

export function addCountryArrive(country) {
	return { type: ADD_COUNTRY_ARRIVE, country };
}

export function addCountryCodeDepart(countryCode) {
	return { type: ADD_COUNTRY_ARRIVE, countryCode };
}

export function addCountryCodeArrive(countryCode) {
	return { type: ADD_COUNTRY_ARRIVE, countryCode };
}

export function addText(text) {
	return { type: ADD_TEXT, text };
}
