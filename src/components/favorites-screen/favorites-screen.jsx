import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid';
import FavoritesLocationItem from './favorites-location-item'
import {
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';
import {City} from '../../const';

const FavoritesScreen = (props) => {
  const {activeCity, onScreenRender} = props;

  useEffect(()=> {
    onScreenRender();
  }, [activeCity]);

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
              {Object.keys(City).map((city) => <FavoritesLocationItem city={city} key={nanoid()} />)}
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
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onScreenRender() {
    dispatch(ActionCreator.setFavoriteOffers());
  }
});

FavoritesScreen.propTypes = {
  activeCity: stringPropTypes,
  onScreenRender: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
