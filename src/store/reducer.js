// import offers from '../mocks/offers';
import {City} from '../const';
import {ActionType} from './action';
import {
  getFavoriteOffers,
  getOffersPerCity
} from '../utils/common';

const initialState = {
  offers: [],
  offersPerCity: [],
  activeCity: City.Paris.NAME,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
      }
    case ActionType.SET_OFFERS_PER_CITY:
      return {
        ...state,
        offersPerCity: getOffersPerCity(state.offers, state.activeCity)
      };
    case ActionType.SET_FAVORITE_OFFERS:
      return {
        ...state,
        offers: getFavoriteOffers(initialState.offers)
      };
  }
  return state;
};

export {reducer};
