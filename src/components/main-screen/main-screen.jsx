import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchOffers} from '../../store/api-actions';
import EmptyOffersListContainer from '../empty-offers-list-container/empty-offers-list-container';
import FullOffersListContianer from '../full-offers-list-container/full-offers-list-container';
import CitiesList from '../cities-list/cities-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
  offersPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';
import {isListEmpty} from '../../utils/common';
import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';
import {
  getOffers,
  getIsDataLoaded
} from '../../store/data-load/selectors';
import {resetDataLoadStatus} from '../../store/action';

const MainScreen = (props) => {
  const {offers, isDataLoaded, onLoadData, onResetDataLoadStatus} = props;

  useEffect(() => {
    onResetDataLoadStatus();
    onLoadData();
  }, []);

  const getOffersListMapContainer = () => {
    if (!isDataLoaded) {
      return <LoadingPlaceholder />;
    }
    if (isListEmpty(offers)) {
      return <EmptyOffersListContainer />;
    }
    return <FullOffersListContianer />;
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {getOffersListMapContainer()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  isDataLoaded: getIsDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
  onResetDataLoadStatus() {
    dispatch(resetDataLoadStatus());
  }
});

MainScreen.propTypes = {
  offers: offersPropTypes,
  onLoadData: functionPropTypes,
  onResetDataLoadStatus: functionPropTypes,
  isDataLoaded: booleanPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
