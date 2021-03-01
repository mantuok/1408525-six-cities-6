import React from 'react';
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card';
import {
  offersPropTypes,
  stringPropTypes
} from '../../utils/props-validation';
import {getOffersPerCity} from '../../utils/common';

const FavoritesLocationItem = (props) => {
  const {city, offers} = props;

  const favoriteOffersPerCity = getOffersPerCity(offers, city);

  if (favoriteOffersPerCity.length > 0) {
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
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers
});

FavoritesLocationItem.propTypes = {
  offers: offersPropTypes,
  city: stringPropTypes
};

export default connect(mapStateToProps, null)(FavoritesLocationItem);
