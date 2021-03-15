import {
  City,
  AuthorizationStatus,
  SortingType
} from '../const';
import {ActionType} from './action';
import {
  getOffersPerCity
} from '../utils/common';

const initialState = {
  offers: [],
  selectedSortingType: SortingType.POPULAR,
  offersPerCity: [],
  favoriteOffers: [],
  nearbyOffers: [],
  reviewsPerOffer: [],
  activeCity: City.Paris.NAME,
  activeCardId: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userEmail: ``,
  userAvatar: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userEmail: action.payload.email,
        userAvatar: action.payload.avatar_url
      };
    case ActionType.SET_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.SET_OFFERS_PER_CITY:
      return {
        ...state,
        offersPerCity: getOffersPerCity(state.offers, state.activeCity)
      };
    case ActionType.SET_SORTING:
      return {
        ...state,
        selectedSortingType: action.payload
      };
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCardId: action.payload
      };
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload
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
    }
    default:
      return state;
  }
};

export {reducer};
