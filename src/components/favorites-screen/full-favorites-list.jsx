import React from 'react';
import {City} from '../../const';
import {nanoid} from 'nanoid';
import FavoritesLocationItem from './favorites-location-item';
import {getOffersPerCity} from '../../utils/common';
import {
  offersPropTypes
} from '../../utils/props-validation';

const FullFavoritesList = (props) => {
  const {favoriteOffers} = props;

  const getFavoritesLocationItem = (favoriteOffersPerCity, city) => {
    console.log(favoriteOffersPerCity)

    if (favoriteOffersPerCity.length > 0) {
      console.log(city)
      return <FavoritesLocationItem
        city={city}
        favoriteOffersPerCity={favoriteOffersPerCity}
        key={nanoid()}
      />;
    } else {
      return null;
    }
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(City).map((city) => {
          const favoriteOffersPerCity = getOffersPerCity(favoriteOffers, city);
          getFavoritesLocationItem(favoriteOffersPerCity, city)
        })}
      </ul>
    </section>
  );
};

FullFavoritesList.propTypes = {
  favoriteOffers: offersPropTypes
};

export default FullFavoritesList;
