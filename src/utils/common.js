import {RATING_STARS} from '../const'

export const getRatingStarsWidth = (rating) => RATING_STARS[Math.round(rating)];
export const getOfferById = (offers, id) => offers.find((offer) => offer.id === id);
