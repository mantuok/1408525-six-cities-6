export const ActionType = {
  SET_CITY: `setCity`,
  SET_OFFERS_PER_CITY: `setOffersPerCity`,
  // SET_FAVORITE_OFFERS: `setFavoriteOffers`,
  LOAD_OFFERS: `loadOffers`,
  LOAD_FAVORITE_OFFERS: `loadFavoriteOffers`
};

export const ActionCreator = {
  setCity: (selectedCity) => ({
    type: ActionType.SET_CITY,
    payload: selectedCity,
  }),
  setOffersPerCity: () => ({
    type: ActionType.SET_OFFERS_PER_CITY,
  }),
  // setFavoriteOffers: () => ({
  //   type: ActionType.SET_FAVORITE_OFFERS,
  // }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favoriteOffers
  })
};
