import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteOffers} from '../../store/api-actions';
import {nanoid} from 'nanoid';
import FavoritesLocationItem from './favorites-location-item';
import LoadingPlaceholder, {} from '../loading-placeholder/loading-placeholder';
import Header from '../header/header';
import Footer from '../footer/footer';
import {City} from '../../const';
import {getOffersPerCity} from '../../utils/common';
import {
  offersPropTypes,
  functionPropTypes
} from '../../utils/props-validation';

const FavoritesScreen = (props) => {
  const {favoriteOffers, onLoadFavoriteOffers} = props;
  const [isDataPerOfferLoaded, setDataPerOfferLoaded] = useState(false);

  const getFavoritwOffersListItems = () => {
    Object.keys(City).map((city) => {
      const favoriteOffersPerCity = getOffersPerCity(favoriteOffers);
      if (favoriteOffersPerCity > 0) {
        return <FavoritesLocationItem city={city} key={nanoid()} offers={favoriteOffersPerCity} />;
      }
      else {
        return null;
      }
    })
  }

  useEffect(()=> {
    if (!isDataPerOfferLoaded) {
      onLoadFavoriteOffers();
      setDataPerOfferLoaded(true);
    }
  }, [isDataPerOfferLoaded]);

  if (!isDataPerOfferLoaded) {
    return (
      <LoadingPlaceholder />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {getFavoritwOffersListItems()}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});

FavoritesScreen.propTypes = {
  offers: offersPropTypes,
  onLoadFavoriteOffers: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
