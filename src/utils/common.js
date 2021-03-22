import {
  RATING_STARS,
  City,
  AuthorizationStatus
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

export const getItemIndex = (item, array) => array.findIndex((arrayItem) => arrayItem.id === item.id)

export const updateOfferInList = (updatedOffer, offers) => {
  // const offerIndex = offers.findIndex((offer) => offer.id === updatedOffer.id);
  const offerIndex = getItemIndex(updatedOffer, offers);
  return [
    ...offers.slice(0, offerIndex),
    updatedOffer,
    ...offers.slice(offerIndex + 1)
  ];
};

export const updateFavoriteOfferInList = (updatedOffer, favoriteOffers) => {
  if (updatedOffer.isFavorite) {
    favoriteOffers.push(updatedOffer);
  } else {
    favoriteOffers.splice(getItemIndex(updatedOffer, favoriteOffers), 1);
  }
  return favoriteOffers;
};

export const isUserAuthorizaed = (status) => status === AuthorizationStatus.AUTH
