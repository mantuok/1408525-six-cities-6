import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import SortingMenu from '../sorting-menu/sorting-menu';
import OfferCard from '../offer-card/offer-card';
import {applySorting} from '../../utils/offers-sorting';
import {
  offersPropTypes,
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';
import { getOffersPerCity } from '../../utils/common';

const OffersList = (props) => {
  const {offersPerCity, activeCity, onFilterOffers, onSetActiveCard, selectedSortingType} = props;
  const [activeCardId, setActiveCard] = useState(undefined);

  const isCardActive = (offer) => offer.id === activeCardId;

  useEffect(() => {
    onFilterOffers();
  }, [activeCity]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersPerCity.length} places to stay in {activeCity}</b>
      <SortingMenu />
      <div className="cities__places-list places__list tabs__content">
        {applySorting(offersPerCity, selectedSortingType).map((offer) => <OfferCard
          handleMouseOver={() => {
            setActiveCard(offer.id);
            onSetActiveCard(offer.id);
          }
          }
          isCardActive={isCardActive(offer)}
          key={offer.id}
          offer={offer}
        />)}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offersPerCity: getOffersPerCityList(state),
  activeCity: getActiveCity(state),
  selectedSortingType: getSelectedSortingType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterOffers() {
    dispatch(ActionCreator.setOffersPerCity());
  },
  onSetActiveCard(offerId) {
    dispatch(ActionCreator.setActiveCard(offerId));
  }
});

OffersList.propTypes = {
  offersPerCity: offersPropTypes,
  activeCity: stringPropTypes,
  onFilterOffers: functionPropTypes,
  onSetActiveCard: functionPropTypes,
  selectedSortingType: stringPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(OffersList));
