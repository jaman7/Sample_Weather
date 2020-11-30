/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Wrapper = inject('WeatherStore')(
	observer((props) => {
		const { WeatherStore } = props;
		const { iddiv, nameClass, children } = props;
		const classnamestring = nameClass.length > 0 ? `${nameClass}` : '';

		const Ids = iddiv;

		return (
			<div id={Ids} className={classnamestring}>
				{children}
			</div>
		);
	})
);
Wrapper.wrappedComponent.propTypes = {
	WeatherStore: PropTypes.objectOf(PropTypes.object).isRequired,
	nameClass: PropTypes.string,
	Ids: PropTypes.string
};

Wrapper.wrappedComponent.defaultProps = {
	nameClass: '',
	Ids: ''
};

export default Wrapper;
