import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {getRatingStarsWidth} from '../../utils/common';
import {
  offerPropTypes,
  functionPropTypesNotRequired,
  booleanPropTypesNotRequired
} from '../../utils/props-validation';

const OfferCard = (props) => {
  const {isNearbyOffer = false, handleMouseOver, isCardActive, offer} = props;
  const {id, isPremium, title, previewImage, price, rating, type} = offer;

  const cardClass = classnames(`cities__place-card place-card`, {"place-card--active": isCardActive});
  const premiumMarkClass = classnames(`place-card__mark`, {"visually-hidden": !isPremium});
  const previewImageClass = classnames(`place-card__image-wrapper`,
      {"near-places__image-wrapper": isNearbyOffer},
      {"cities__image-wrapper": !isNearbyOffer});

  return (
    <article className={cardClass} onMouseOver={handleMouseOver}>
      <div className={premiumMarkClass}>
        <span>Premium</span>
      </div>
      <div className={previewImageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  handleMouseOver: functionPropTypesNotRequired,
  isCardActive: booleanPropTypesNotRequired,
  isNearbyOffer: booleanPropTypesNotRequired
};

export default OfferCard;
