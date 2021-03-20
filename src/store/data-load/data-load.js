
import {ActionType} from './action';

const initialState = {
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  reviewsPerOffer: [],
  isDataLoaded: false,
  isFavoriteDataLoaded: false,
};

const dataLoad = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteDataLoaded: true
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
    case ActionType.LOAD_REVIEWS_PER_OFFER:
      return {
        ...state,
        reviewsPerOffer: action.payload
      };
  }
};

export {dataLoad};
