import React from 'react';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';

const FullOffersListContianer = () => {
  return (
    <div className="cities__places-container container">
      <OffersList />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map />
        </section>
      </div>
    </div>
  );
};

export default FullOffersListContianer;
