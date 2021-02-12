import React from 'react';
import {
  getRatingStarsWidth,
  getFormatedDate
} from '../../utils/common'

const OfferReview = ({review}) => {
  const {date, rating, comment} = review;
  const {avatarUrl, isPro, name} = review.user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={"reviews__avatar-wrapper user__avatar-wrapper" + (isPro ? `user__avatar-wrapper--pro` : ``)}>
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
          <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getFormatedDate(date)}</time>
      </div>
    </li>
  )
};

export default OfferReview;
