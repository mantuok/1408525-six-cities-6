import React from 'react';
import {nanoid} from 'nanoid';
import FavoritesLocationItem from './favorites-location-item';
import Header from '../header/header';
import Footer from '../footer/footer';
import {City} from '../../const';

const FavoritesScreen = () => {
  return (
    <div className="page">
      <Header />
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
      <Footer />
    </div>
  );
};

export default FavoritesScreen;
