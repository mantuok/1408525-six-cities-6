import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {getOffers} from '../data-load/selectors';
import {getOffersPerCity} from '../../utils/common';

export const getSelectedSortingType = (state) => state[NameSpace.DATA_SET].selectedSortingType;
export const getActiveCity = (state) => state[NameSpace.DATA_SET].activeCity;
export const getActiveCardId = (state) => state[NameSpace.DATA_SET].activeCardId;

export const getOffersPerCityList = createSelector(
    [
      getOffers,
      getActiveCity
    ],
    (offers, activeCity) => getOffersPerCity(offers, activeCity)
);
