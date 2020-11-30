/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import SearchCity from './components/SearchCity';
import Result from './components/Result';

@inject('WeatherStore')
@observer
class App extends Component {
	async componentDidMount() {
		const { WeatherStore } = this.props;
		WeatherStore.Retrieve('Zakopane');
	}

	render() {
		const { WeatherStore } = this.props;

		// console.log(toJS(WeatherStore.WeatherData));
		// console.log(toJS(WeatherStore.searchResults));

		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="col px-0">
							<SearchCity />
						</div>
					</div>
				</div>
				<div className="container-fluid bg">
					<Result />
				</div>
			</>
		);
	}
}

App.wrappedComponent.propTypes = {
	WeatherStore: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default App;
