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
export const isListEmpty = (list) => list.length === 0;
export const getFavoriteOffers = (offers) => offers.filter((offer) => offer.isFavorite);
export const getOffersPerCity = (offers, selectedCity) => {
  return offers.filter((offer) => offer.city.name === selectedCity);
};

export const updateOfferInList = (updatedOffer, offers) => {
  const offerIndex = offers.findIndex((offer) => offer.id === offerId);
  return [
    ...offers.slice(0, offerIndex),
    updatedOffer,
    ...offers.slice(offerIndex + 1)
  ]
}
