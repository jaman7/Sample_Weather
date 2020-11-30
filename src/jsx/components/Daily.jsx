/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Wrapper from './Layout/Wrapper';
import Span from './Layout/Span';
import H4 from './Layout/H4';
import H3 from './Layout/H3';

const Daily = inject('WeatherStore')(
	observer((props) => {
		const {
			WeatherStore,
			date,
			day,
			sunset,
			sunrise,
			icon,
			description,
			tempday,
			tempMorning,
			tempNight
		} = props;
		const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

		return (
			<>
				<Wrapper nameClass="item">
					<Wrapper nameClass="item-column">
						<Span>{date}</Span>
						<Span>{day}</Span>

						<Wrapper nameClass="item-column bg">
							<Span>Sunset</Span>
							<Span>{sunset}</Span>
							<Span>Sunrise</Span>
							<Span>{sunrise}</Span>
						</Wrapper>
					</Wrapper>

					<Wrapper nameClass="item-column">
						<H4 nameClass="description">{description}</H4>
						<img className="img-fluid" src={iconUrl} alt="" />
						<H4>{tempday}&#176;</H4>
					</Wrapper>

					<Wrapper nameClass="item-column">
						<H3 nameClass="temp">
							<Span>Morning: </Span>
							{tempMorning}&#176;
						</H3>
						<H3 nameClass="temp">
							<Span>Night: </Span>
							{tempNight}&#176;
						</H3>
					</Wrapper>
				</Wrapper>
			</>
		);
	})
);

Daily.wrappedComponent.propTypes = {
	WeatherStore: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Daily;
