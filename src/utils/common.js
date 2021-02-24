import {
  RATING_STARS,
  City
} from '../const';

export const getRatingStarsWidth = (rating) => RATING_STARS[Math.round(rating)];
export const getFormatedDate = (date) => new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`});
export const getOfferById = (offers, id) => {
  if (id.typeof !== `number`) {
    id = parseInt(id, 10);
  }
  return offers.find((offer) => offer.id === id);
};
export const getCityCoordinates = (cityName) => ([City[cityName].LATITUDE, City[cityName].LONGITUDE]);
