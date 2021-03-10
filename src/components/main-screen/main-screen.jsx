import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchOffers, checkAuth} from '../../store/api-actions';
import EmptyOffersListContainer from './empty-offers-list-container';
import FullOffersListContianer from './full-offers-list-container';
import CitiesList from '../cities-list/cities-list';
import ProfileNavigation from '../profile-navigation/profile-navigation'
import {
  offersPropTypes,
  stringPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';
import {isListEmpty} from '../../utils/common';
import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';
import {AuthorizationStatus} from '../../const';


const MainScreen = (props) => {
  const {offers, isDataLoaded, onLoadData, authorizationStatus, userEmail, onCheckAuthorization} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  // useEffect(() => {
  //   onCheckAuthorization()
  // }, [authorizationStatus]);

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <ProfileNavigation />
                {/* <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offersPerCity: state.offersPerCity,
  activeCity: state.activeCity,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
  onCheckAuthorization() {
    dispatch(checkAuth())
  }
});

MainScreen.propTypes = {
  offers: offersPropTypes,
  activeCity: stringPropTypes,
  onLoadData: functionPropTypes,
  isDataLoaded: booleanPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
