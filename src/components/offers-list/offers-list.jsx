import React from 'react';
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from '../../utils/props-validation';

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
    </div>
  )
}

OffersList.propTypes = offersPropTypes;

export default OffersList;
