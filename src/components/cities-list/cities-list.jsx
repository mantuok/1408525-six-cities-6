import React from 'react';
import {nanoid} from 'nanoid';
import CityItem from './city-item'
import {City} from '../../const';

const CitiesList = () => {
  const renderCityItems = () => {
    return Object.values(City).map((city) => (
        <CityItem city={city}  key={nanoid()} />
    ));
  };

  return (
    <ul className="locations__list tabs__list">
      {renderCityItems()}
    </ul>
  );
};

export default CitiesList;
