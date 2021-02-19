import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {getRatingStarsWidth} from '../../utils/common';
import {
  offerPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';

const OfferCard = (props) => {
  const {handleMouseOver, isCardActive, offer} = props;
  const {id, isPremium, title, previewImage, price, rating, type} = offer;
  return (
    <article className={classNames(`cities__place-card place-card`, {"place-card--active": isCardActive})} onMouseOver={handleMouseOver}>
      <div className={classNames(`place-card__mark`, {"visually-hidden": !isPremium})}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper" >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`./` + previewImage} width="260" height="200" alt={title} />
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
  handleMouseOver: functionPropTypes,
  isCardActive: booleanPropTypes
};

export default OfferCard;
