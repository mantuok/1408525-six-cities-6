import {RATING_STARS} from '../const';

export const getRatingStarsWidth = (rating) => RATING_STARS[Math.round(rating)];
export const getFormatedDate = (date) => new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`});
export const getOfferById = (offers, id) => offers.find((offer) => offer.id === id);
