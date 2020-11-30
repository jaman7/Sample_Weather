/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Row = inject('WeatherStore')(
	observer((props) => {
		const { WeatherStore } = props;
		const { nameClass, children } = props;
		const classnamestring = nameClass.length > 0 ? ` ${nameClass}` : '';

		return <div className={`row${classnamestring}`}>{children}</div>;
	})
);
Row.wrappedComponent.propTypes = {
	WeatherStore: PropTypes.objectOf(PropTypes.object).isRequired,
	nameClass: PropTypes.string
};

Row.wrappedComponent.defaultProps = {
	nameClass: ''
};

export default Row;
