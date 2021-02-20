import offers from './mocks/offers';
import {City} from './const';
import {ActionType} from './action'

const initialState = {
  offers: offers,
  city: City.PARIS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: state.city
      };
    case ActionType.SET_OFFERS_PER_CITY:
      return {
        ...state,
        offers: state.offers
      }
  }

  return state;
};

export {reducer};

