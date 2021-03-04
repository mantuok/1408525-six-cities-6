import {ActionCreator} from './action';
import {adaptOffersToClient} from '../utils/adapter'

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(ActionCreator.loadOffers(data)))
);
