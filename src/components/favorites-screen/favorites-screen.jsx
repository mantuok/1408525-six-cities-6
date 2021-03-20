import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteOffers} from '../../store/api-actions';
import {nanoid} from 'nanoid';
import FavoritesLocationItem from './favorites-location-item';
import LoadingPlaceholder, {} from '../loading-placeholder/loading-placeholder';
import Header from '../header/header';
import Footer from '../footer/footer';
import {City} from '../../const';
import {getOffersPerCity, getFavoriteOffers} from '../../utils/common';
import {
  offersPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';

const FavoritesScreen = (props) => {
  const {favoriteOffers, onLoadFavoriteOffers, isFavoriteDataLoaded} = props;

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
    if (!isFavoriteDataLoaded) {
      onLoadFavoriteOffers();
    }
  }, [isFavoriteDataLoaded]);

  if (!isFavoriteDataLoaded) {
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
  favoriteOffers: getFavoriteOffers(state),
  isFavoriteDataLoaded: getIsFavoriteDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});

FavoritesScreen.propTypes = {
  favoriteOffers: offersPropTypes,
  onLoadFavoriteOffers: functionPropTypes,
  isFavoriteDataLoaded: booleanPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
