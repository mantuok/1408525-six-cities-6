import offers from '../mocks/offers';
import {City} from '../const';
import {ActionType} from './action';
import {
  getFavoriteOffers,
  getOffersPerCity
} from '../utils/common';

// const getOffersPerCity = (offers, selectedCity) => {
//   return offers.filter((offer) => offer.city.name === selectedCity);
// }

const initialState = {
  offers: offers,
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
      }
  }
  return state;
};

export {reducer};
