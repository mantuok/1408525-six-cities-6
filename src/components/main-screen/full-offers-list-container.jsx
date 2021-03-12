import React from 'react';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {MapType} from '../../const';

const FullOffersListContianer = () => {
  return (
    <div className="cities__places-container container">
      <OffersList />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map mapType={MapType.MAIN} />
        </section>
      </div>
    </div>
  );
};

export default FullOffersListContianer;
