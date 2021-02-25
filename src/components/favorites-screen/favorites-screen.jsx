import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid';
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from '../../utils/props-validation';
import {City} from '../../const';
import {getOffersPerCity} from '../../utils/common';

const renderFavoriteLocationItems = (offers) => {
  return Object.keys(City).map((city) => {
    const favoriteOffersPerCity = getOffersPerCity(offers, city)
    if (favoriteOffersPerCity.length > 0) {
      return (
        <li className="favorites__locations-items" key={nanoid()}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffersPerCity.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )
    }
  })
}

const FavoritesScreen = (props) => {
  const {offers, activeCity, onScreenRender} = props;

  useEffect(()=> {
    onScreenRender()
  }, [activeCity])

  console.log(offers)

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {renderFavoriteLocationItems(offers)}
            </ul>
          </section>
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
 })

const mapDispatchToProps = (dispatch) => ({
  onScreenRender() {
    dispatch(ActionCreator.setFavoriteOffers())
  }
})

// FavoritesScreen.propTypes = {
//   offers: offersPropTypes
// };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
