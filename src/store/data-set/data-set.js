import {ActionType} from './action';
import {getOffersPerCity} from '../../utils/common';
import {
  SortingType,
  City
} from '../../const';

const initialState = {
  selectedSortingType: SortingType.POPULAR,
  offersPerCity: [],
  activeCity: City.Paris.NAME,
  activeCardId: null
};

const dataSet = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        activeCity: action.payload
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
  }
};

export {dataSet};
