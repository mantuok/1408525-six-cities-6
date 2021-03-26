import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA_LOAD].offers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA_LOAD].favoriteOffers;
export const getNearbyOffers = (state) => state[NameSpace.DATA_LOAD].nearbyOffers;
export const getReviewsPerOffer = (state) => state[NameSpace.DATA_LOAD].reviewsPerOffer;
export const getIsDataLoaded = (state) => state[NameSpace.DATA_LOAD].isDataLoaded;
