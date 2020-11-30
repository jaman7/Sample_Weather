/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Column = inject('WeatherStore')(
	observer((props) => {
		const { WeatherStore } = props;
		const { nameClass, children } = props;
		const classnamestring = nameClass.length > 0 ? `${nameClass}` : '';

		return <div className={classnamestring}>{children}</div>;
	})
);
Column.wrappedComponent.propTypes = {
	WeatherStore: PropTypes.objectOf(PropTypes.object).isRequired,
	nameClass: PropTypes.string
};

Column.wrappedComponent.defaultProps = {
	nameClass: ''
};

export default Column;
