import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteOffers} from '../../store/api-actions';
import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
  getFavoriteOffers,
  getIsFavoriteDataLoaded,
  getIsDataLoaded
} from '../../store/data-load/selectors';
import {isListEmpty} from '../../utils/common';
import {
  offersPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';
import EmptyFavoritesList from './empty-favorites-list';
import FullFavoritesList from './full-favorites-list';
import {ActionCreator} from '../../store/action';

const FavoritesScreen = (props) => {
  const {favoriteOffers, onLoadFavoriteOffers, isDataLoaded, onResetDataLoadStatus} = props;

  useEffect(()=> {
    onResetDataLoadStatus()
    onLoadFavoriteOffers();
  }, []);

  const getFavoriteOffersList = () => {
    if (!isDataLoaded) {
      return (
        <LoadingPlaceholder />
      );
    }
    if (isListEmpty(favoriteOffers)) {
      return <EmptyFavoritesList />;
    }
    return <FullFavoritesList favoriteOffers={favoriteOffers} />;
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {getFavoriteOffersList()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  isDataLoaded: getIsDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
  onResetDataLoadStatus() {
    dispatch(ActionCreator.resetDataLoadStatus())
  }
});

FavoritesScreen.propTypes = {
  favoriteOffers: offersPropTypes,
  onLoadFavoriteOffers: functionPropTypes,
  isDataLoaded: booleanPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
