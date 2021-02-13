import React, {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from '../../utils/props-validation';

const OffersList = (props) => {
  const {offers} = props;
  const [activeCardId, setActiveCard] = useState(undefined);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard handleMouseOver={() => setActiveCard(offer.id)} key={offer.id} offer={offer} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: offersPropTypes
};

export default OffersList;
