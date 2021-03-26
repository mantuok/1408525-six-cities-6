import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setActiveCard} from '../../store/action';
import SortingMenu from '../sorting-menu/sorting-menu';
import OfferCard from '../offer-card/offer-card';
import {
  offersPropTypes,
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';
import {
  getActiveCity,
  getSortedOffersPerCity
} from '../../store/data-set/selectors';

const OffersList = (props) => {
  const {activeCity, onSetActiveCard, sortedOffersPerCity} = props;
  const [activeCardId, setActiveCard] = useState(undefined);

  const isCardActive = (offer) => offer.id === activeCardId;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffersPerCity.length} places to stay in {activeCity}</b>
      <SortingMenu />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffersPerCity.map((offer) => <OfferCard
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
  activeCity: getActiveCity(state),
  sortedOffersPerCity: getSortedOffersPerCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveCard(offerId) {
    dispatch(setActiveCard(offerId));
  }
});

OffersList.propTypes = {
  sortedOffersPerCity: offersPropTypes,
  activeCity: stringPropTypes,
  onSetActiveCard: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
