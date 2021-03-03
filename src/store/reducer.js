import offers from '../mocks/offers';
import {City} from '../const';
import {ActionType} from './action';
import {
  getFavoriteOffers,
  getOffersPerCity
} from '../utils/common';

const initialState = {
  offers,
  activeCity: City.Paris.NAME
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.SET_OFFERS_PER_CITY:
      return {
        ...state,
        offers: getOffersPerCity(initialState.offers, state.activeCity)
      };
    case ActionType.SET_FAVORITE_OFFERS:
      return {
        ...state,
        offers: getFavoriteOffers(initialState.offers)
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      }

  }
  return state;
};

export {reducer};
