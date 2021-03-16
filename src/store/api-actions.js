import {ActionCreator} from './action';
import {
  adaptOffersToClient,
  adaptReviewsToClient
} from '../utils/adapter';
import {
  AuthorizationStatus
} from '../const';
import {api} from '../index';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(({data}) => {
    dispatch(ActionCreator.setUserData(data));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => {
    dispatch(ActionCreator.setUserData({}));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  })
);

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOfferById = (id) => {
  return api.get(`hotels/${id}`)
  .then(({data}) => adaptOffersToClient(data))
};

export const fetchReviewsPerOffer = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
  .then(({data}) => adaptReviewsToClient(data))
  .then((data) => {
    dispatch(ActionCreator.loadReviewsPerOffer(data))
  })
);

export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`hotels/${offerId}/nearby`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(ActionCreator.loadNearbyOffers(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);
