export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_CITY: `city/setCity`,
  SET_OFFERS_PER_CITY: `offers/setOffersPerCity`,
  SET_ACTIVE_CARD: `offers/setActiveCard`,
  SET_SORTING: `sorting/setSorting`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_REVIEWS_PER_OFFER: `reviews/loadReviewsPerOffer`,
  LOAD_FAVORITE_OFFERS: `offers/loadFavoriteOffers`,
  RESET_DATA_LOAD_STATUS: `offers/resetDataLoadStatus`,
  CHANGE_FAVORITE_OFFER_STATUS: `offers/changeFavoriteOfferStatus`,
  LOAD_NEARBY_OFFERS: `offers/loadNearbyOffers`,
  SET_USER_DATA: `user/setUserData`
};

export const setAuthorizationStatus = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const setCity = (selectedCity) => ({
  type: ActionType.SET_CITY,
  payload: selectedCity,
});

export const setSorting = (selectedSortingType) => ({
  type: ActionType.SET_SORTING,
  payload: selectedSortingType
});

export const setActiveCard = (activeCardId) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: activeCardId
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const resetDataLoadStatus = () => ({
  type: ActionType.RESET_DATA_LOAD_STATUS
});

export const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: favoriteOffers
});

export const changeFavoriteOfferStatus = (offer) => ({
  type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
  payload: offer
});

export const loadNearbyOffers = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const loadReviewsPerOffer = (reviewsPerOffer) => ({
  type: ActionType.LOAD_REVIEWS_PER_OFFER,
  payload: reviewsPerOffer
});

export const setUserData = (data) => ({
  type: ActionType.SET_USER_DATA,
  payload: data
});
