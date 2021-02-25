import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import {offersPropTypes} from '../../utils/props-validation';
import {isListEmpty} from '../../utils/common';

const renderOffersListMapContainer = (isListEmpty) => {
  if (isListEmpty) {
    return (
      <div className="cities__places-container container cities__places-container--empty">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    )
  } else {
    return (
      <div className="cities__places-container container">
        <OffersList />
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map />
          </section>
        </div>
      </div>
    )
  }
}

const MainScreen = (props) => {
  const {offers, activeCity, onScreenRender} = props;

  useEffect(() => {
    onScreenRender()
  }, [activeCity])

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
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
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
          {renderOffersListMapContainer(isListEmpty(offers))}
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
 activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onScreenRender() {
    dispatch(ActionCreator.setOffersPerCity());
  },
});

MainScreen.propTypes = {
  offers: offersPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
