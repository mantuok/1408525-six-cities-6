import {
  requireAuthorization,
  setUserData,
  loadOffers,
  loadReviewsPerOffer,
  loadNearbyOffers,
  loadFavoriteOffers,
  changeFavoriteOfferStatus,
} from './action';
import {
  adaptOffersToClient,
  adaptReviewsToClient
} from '../utils/adapter';
import {
  AuthorizationStatus
} from '../const';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(({data}) => {
    dispatch(setUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => {
    dispatch(setUserData({}));
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  })
);

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(loadOffers(data)))
);

export const fetchOfferById = (id, api) => {
  return api.get(`hotels/${id}`)
  .then(({data}) => adaptOffersToClient(data));
};

export const fetchReviewsPerOffer = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
  .then(({data}) => adaptReviewsToClient(data))
  .then((data) => dispatch(loadReviewsPerOffer(data)))
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comments/${id}`, {comment, rating})
  .then(({data}) => adaptReviewsToClient(data))
  .then((data) => dispatch(loadReviewsPerOffer(data)))
);

export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`hotels/${offerId}/nearby`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(loadNearbyOffers(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(loadFavoriteOffers(data)))
);

export const updateFavoriteOfferStatus = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${offerId}/${status}`, {offerId, status})
  .then(({data}) => adaptOffersToClient(data))
  .then((data) => dispatch(changeFavoriteOfferStatus(data)))
);

export const updateLocalFavoriteOfferStatus = (offerId, status, api) => {
  return api.post(`/favorite/${offerId}/${status}`, {offerId, status})
  .then(({data}) => adaptOffersToClient(data));
};
