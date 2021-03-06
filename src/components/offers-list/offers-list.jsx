import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import OfferCard from '../offer-card/offer-card';
import {
  offersPropTypes,
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';

const OffersList = (props) => {
  const {offersPerCity, activeCity, onFilterOffers} = props;
  const [activeCardId, setActiveCard] = useState(undefined);

  const isCardActive = (offer) => offer.id === activeCardId;

  useEffect(() => {
    onFilterOffers();
  }, [activeCity]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersPerCity.length} places to stay in {activeCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--closed">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offersPerCity.map((offer) => <OfferCard
          handleMouseOver={() => setActiveCard(offer.id)}
          isCardActive={isCardActive(offer)}
          key={offer.id}
          offer={offer}
        />)}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offersPerCity: state.offersPerCity,
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onFilterOffers() {
    dispatch(ActionCreator.setOffersPerCity());
  }
});

OffersList.propTypes = {
  offersPerCity: offersPropTypes,
  activeCity: stringPropTypes,
  onFilterOffers: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
