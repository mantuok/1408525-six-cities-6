import React from 'react';
import OfferCard from '../offer-card/offer-card';
import {
  offersPropTypes,
  stringPropTypes
} from '../../utils/props-validation';

const FavoritesLocationItem = (props) => {
  const {city, favoriteOffersPerCity} = props;

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favoriteOffersPerCity.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
        </div>
      </li>
    );
};

FavoritesLocationItem.propTypes = {
  favoriteOffersPerCity: offersPropTypes,
  city: stringPropTypes
};

export default (FavoritesLocationItem);
