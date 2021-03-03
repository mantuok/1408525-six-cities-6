import {ActionCreator} from './action';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => ActionCreator.loadOffers(data))
);
