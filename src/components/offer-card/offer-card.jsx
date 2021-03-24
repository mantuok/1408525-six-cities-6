import React, {useState} from 'react';
import classnames from 'classnames';
import {Link, useHistory} from 'react-router-dom';
import {getRatingStarsWidth} from '../../utils/common';
import {
  offerPropTypes,
  functionPropTypesNotRequired,
  booleanPropTypesNotRequired,
  functionPropTypes,
  stringPropTypes
} from '../../utils/props-validation';
import {connect} from 'react-redux';
import {updateFavoriteOfferStatus} from '../../store/api-actions';
import {isUserAuthorized} from '../../utils/common';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {
  AppRoute,
  FavoriteStatus
} from '../../const';

const getUpdatedFavoriteStatus = (isCurrentlyFavorite) =>
  isCurrentlyFavorite ?
    FavoriteStatus.REMOVE :
    FavoriteStatus.ADD;

const OfferCard = (props) => {
  const {
    isNearbyOffer = false,
    handleMouseOver,
    isCardActive,
    offer,
    onFavoriteButtonClick,
    authorizationStatus,
  } = props;
  const {
    id,
    isPremium,
    isFavorite,
    title,
    previewImage,
    price,
    rating,
    type
  } = offer;

  const [currentFavoriteStatus, setCurrentFavoriteStatus] = useState(isFavorite);

  const history = useHistory();

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();
    if (isUserAuthorized(authorizationStatus)) {
      onFavoriteButtonClick(id, getUpdatedFavoriteStatus(offer.isFavorite));
      setCurrentFavoriteStatus(!currentFavoriteStatus);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  const cardClass = classnames(`cities__place-card place-card`, {"place-card--active": isCardActive});
  const premiumMarkClass = classnames(`place-card__mark`, {"visually-hidden": !isPremium});
  const previewImageClass = classnames(`place-card__image-wrapper`,
      {"near-places__image-wrapper": isNearbyOffer},
      {"cities__image-wrapper": !isNearbyOffer});
  const getFavoriteButtonColor = () => currentFavoriteStatus ? `#4481c3` : `#b8b8b8`;

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
          <button
            className="place-card__bookmark-button button"
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
              style={{stroke: `${getFavoriteButtonColor()}`}}
            >
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, favoriteStatus) {
    dispatch(updateFavoriteOfferStatus(id, favoriteStatus));
  }
});

OfferCard.propTypes = {
  offer: offerPropTypes,
  handleMouseOver: functionPropTypesNotRequired,
  isCardActive: booleanPropTypesNotRequired,
  isNearbyOffer: booleanPropTypesNotRequired,
  onFavoriteButtonClick: functionPropTypes,
  authorizationStatus: stringPropTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
