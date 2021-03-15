export const ActionType = {
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  SET_CITY: `setCity`,
  SET_OFFERS_PER_CITY: `setOffersPerCity`,
  SET_ACTIVE_CARD: `setActiveCard`,
  SET_SORTING: `setSorting`,
  LOAD_OFFERS: `loadOffers`,
  LOAD_REVIEWS_PER_OFFER: `loadReviewsPerOffer`,
  LOAD_FAVORITE_OFFERS: `loadFavoriteOffers`,
  LOAD_NEARBY_OFFERS: `loadNearbyOffers`,
  SET_USER_DATA: `setUserData`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  setCity: (selectedCity) => ({
    type: ActionType.SET_CITY,
    payload: selectedCity,
  }),
  setOffersPerCity: () => ({
    type: ActionType.SET_OFFERS_PER_CITY,
  }),
  setSorting: (selectedSortingType) => ({
    type: ActionType.SET_SORTING,
    payload: selectedSortingType
  }),
  setActiveCard: (activeCardId) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: activeCardId
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favoriteOffers
  }),
  loadNearbyOffers: (nearbyOffers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers
  }),
  loadReviewsPerOffer: (reviewsPerOffer) => ({
    type: ActionType.LOAD_REVIEWS_PER_OFFER,
    payload: reviewsPerOffer
  }),
  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data
  })
};
