import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import {nanoid} from 'nanoid';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  fetchOfferById,
  fetchReviewsPerOffer,
  updateFavoriteOfferStatus
} from '../../store/api-actions';
import {
  getRatingStarsWidth,
  isUserAuthorized
} from '../../utils/common';
import {
  reviewsPropTypes,
  functionPropTypes,
  stringPropTypes
} from '../../utils/props-validation';
import {
  MapType,
  AppRoute,
  FavoriteStatus
} from '../../const';
import LoadingPlaceholder, {} from '../loading-placeholder/loading-placeholder';
import NearbyOffersList from '../nearby-offers-list/nearby-offers-list';
import OfferImage from './offer-image';
import OfferGood from './offer-good';
import OfferReview from './offer-review';
import NewReview from './new-review';
import Map from '../map/map';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getReviewsPerOffer} from '../../store/data-load/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

const renderImages = (images, title) => {
  return images.map((image) => <OfferImage image={image} title={title} key={nanoid()}/>);
};

const renderGoods = (goods) => {
  return goods.map((good) => <OfferGood good={good} key={nanoid()}/>);
};

const renderReviews = (reviews) => {
  return reviews.map((review) => <OfferReview review={review} key={review.id} />);
};

const getNewReviewForm = (authorizationStatus) => isUserAuthorized(authorizationStatus) ? <NewReview /> : ``;

const getUpdatedFavoriteStatus = (isCurrentlyFavorite) => isCurrentlyFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD

const OfferScreen = (props) => {
  const {reviewsPerOffer, onReviewsPerOfferLoad, onFavoriteButtonClick, authorizationStatus} = props;
  const [isDataPerOfferLoaded, setDataPerOfferLoaded] = useState(false);
  const [currentOffer, setCurrentOffer] = useState({});
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!isDataPerOfferLoaded) {
      fetchOfferById(id)
        .then((offerData) => setCurrentOffer(offerData))
        .then(() => onReviewsPerOfferLoad(id))
        .then(() => setDataPerOfferLoaded(true))
        .catch(() => history.push(AppRoute.NOT_FOUND));
    }
  }, [isDataPerOfferLoaded]);

  if (!isDataPerOfferLoaded) {
    return (
      <LoadingPlaceholder />
    );
  }

  const {bedrooms, description, goods, isPremium, images, maxAdults, title, price, rating, type} = currentOffer;
  const {avatarUrl, isPro, name} = currentOffer.host;
  const premiumMarkClass = classnames(`property__mark`, {"visually-hidden": !isPremium});
  const avatarClass = classnames(`property__avatar-wrapper user__avatar-wrapper`, {"property__avatar-wrapper--pro": isPro});

  const handleFavoriteButtonClick = (evt) => {
    if (isUserAuthorized(authorizationStatus)) {
      onFavoriteButtonClick(id, getUpdatedFavoriteStatus(currentOffer.isFavorite))
    } else {
      history.push(AppRoute.LOGIN)
    }
  }

  return (
    <div className="page">
      <Header />
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
                <button
                  className="property__bookmark-button button"
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                    style={currentOffer.isFavorite ? {stroke:`#4481c3`} : {}}
                  >
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsPerOffer.length}</span></h2>
                <ul className="reviews__list">
                  {renderReviews(reviewsPerOffer)}
                </ul>
                {getNewReviewForm(authorizationStatus)}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map mapType={MapType.NEARBY} currentOffer={currentOffer} />
          </section>
        </section>

        <NearbyOffersList />
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviewsPerOffer: getReviewsPerOffer(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewsPerOfferLoad(id) {
    dispatch(fetchReviewsPerOffer(id));
  },
  onFavoriteButtonClick(id, favoriteStatus) {
    dispatch(updateFavoriteOfferStatus(id, favoriteStatus))
  }
});

OfferScreen.propTypes = {
  reviewsPerOffer: reviewsPropTypes,
  authorizationStatus: stringPropTypes,
  onReviewsPerOfferLoad: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
