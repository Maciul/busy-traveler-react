import React from 'react';
import Loader from '../../components/Loader/Loader';

function WithLoading(Component) {
	return function WithLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return (<Component {...props} />);
		return (<Loader />);
	};
}
export default WithLoading;
