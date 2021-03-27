import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {getOffers} from '../data-load/selectors';
import {
  getOffersPerCity,
  getOfferById
} from '../../utils/common';
import {SortingType} from '../../const';

export const getSelectedSortingType = (state) => state[NameSpace.DATA_SET].selectedSortingType;
export const getActiveCity = (state) => state[NameSpace.DATA_SET].activeCity;
export const getActiveCardId = (state) => state[NameSpace.DATA_SET].activeCardId;

export const getActiveOffer = createSelector(
    [
      getOffers,
      getActiveCardId
    ],
    (offers, activeCardId) => getOfferById(offers, activeCardId)
);

export const getOffersPerCityList = createSelector(
    [
      getOffers,
      getActiveCity
    ],
    (offers, activeCity) => getOffersPerCity(offers, activeCity)
);

export const getSortedOffersPerCity = createSelector(
    [
      getOffersPerCityList,
      getSelectedSortingType
    ],
    (offers, selectedSortingType) => {
      switch (selectedSortingType) {
        case SortingType.POPULAR:
          return offers;
        case SortingType.PRICE_HIGH_LOW:
          return offers
              .slice()
              .sort((a, b) => b.price - a.price);
        case SortingType.PRICE_LOW_HIGH:
          return offers
              .slice()
              .sort((a, b) => a.price - b.price);
        case SortingType.TOPRATED:
          return offers
              .slice()
              .sort((a, b) => b.rating - a.rating);
      }
      return offers;
    }
);
