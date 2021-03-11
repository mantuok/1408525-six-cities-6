import React from 'react';
import classnames from 'classnames';
import {nanoid} from 'nanoid';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  getRatingStarsWidth,
  getOfferById
} from '../../utils/common';
import {
  offersPropTypes,
  reviewsPropTypes
} from '../../utils/props-validation';
import NearbyOffersList from '../nearby-offers-list/nearby-offers-list';
import ProfileNavigation from '../profile-navigation/profile-navigation';
import OfferImage from './offer-image';
import OfferGood from './offer-good';
import OfferReview from './offer-review';
import NewReview from './new-review';

const renderImages = (images, title) => {
  return images.map((image) => <OfferImage image={image} title={title} key={nanoid()}/>);
};

const renderGoods = (goods) => {
  return goods.map((good) => <OfferGood good={good} key={nanoid()}/>);
};

const renderReviews = (reviews) => {
  return reviews.map((review) => <OfferReview review={review} key={review.id} />);
};

const OfferScreen = (props) => {
  const {reviews, offers} = props;
  const {id} = useParams();
  const offer = getOfferById(offers, id);
  const {bedrooms, description, goods, isPremium, images, maxAdults, title, price, rating, type} = offer;
  const {avatarUrl, isPro, name} = offer.host;

  const premiumMarkClass = classnames(`property__mark`, {"visually-hidden": !isPremium});
  const avatarClass = classnames(`property__avatar-wrapper user__avatar-wrapper`, {"property__avatar-wrapper--pro": isPro});

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
                <ProfileNavigation />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {renderImages(images, title)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={premiumMarkClass}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {renderGoods(goods)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={avatarClass}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {renderReviews(reviews)}
                </ul>
                <NewReview />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <NearbyOffersList />
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
  offers: state.offers
});

OfferScreen.propTypes = {
  offers: offersPropTypes,
  reviews: reviewsPropTypes
};

export default connect(mapStateToProps, null)(OfferScreen);
