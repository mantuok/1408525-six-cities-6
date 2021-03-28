
import {ActionType} from './action';
import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {
  checkAuth,
  login,
  logout,
  fetchOffers,
  fetchOfferById,
  fetchReviewsPerOffer,
  postReview,
  fetchNearbyOffers,
  fetchFavoriteOffers,
  updateFavoriteOfferStatus
} from './api-actions';
import {
  adaptOffersToClient,
  adaptReviewsToClient
} from '../utils/adapter';
import {
  AuthorizationStatus,
  FavoriteStatus
} from '../const';

const api = createApi(() => {});

const apiMock = new MockAdapter(api);

const mockUser = {email: `johndoe@gmail.com`, password: `12345`};

const mockOffer = {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  };

const mockOffers = [mockOffer]

const mockReviews = [
  {
    comment: `Curabitur mattis, ante vitae hendrerit lobortis, massa lorem feugiat ipsum, ut sagittis nibh nisi eleifend ligula. Praesent accumsan urna at elit euismod accumsan.`,
    date: `2020-05-08T14:13:56.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
      id: 5,
      isPro: false,
      name: `Ben`
    }
  }
]

const mockNewReview = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  rating: 4
}

describe(`Async operations work correctly`, () => {
  it(`Should make a correct GET call to API login`, () => {
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });
    });
  });

  it(`Should make a correct POST call to API login`, () => {
    const dispatch = jest.fn();
    const loginLoader = login(mockUser);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER_DATA,
        payload: [{fake: true}]
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });
    });
  });

  it(`Should make a correct GET call to API logout`, () => {
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(`/logout`)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER_DATA,
        payload: {}
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH
      });
    });
  });


  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const fetchOffersLoader = fetchOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, mockOffers)

    return fetchOffersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_OFFERS,
        payload: adaptOffersToClient(mockOffers)
      });
    });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    apiMock
      .onGet(`/hotels/${mockOffer.id}`)
      .reply(200, mockOffer)

    return fetchOfferById(mockOffer.id, api)
    .then((response) => {
      expect(response).toEqual(adaptOffersToClient(mockOffer))
    })
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const dispatch = jest.fn();
    const fetchReviewsPerOfferLoader = fetchReviewsPerOffer(mockOffer.id);

    apiMock
      .onGet(`/comments/${mockOffer.id}`)
      .reply(200, mockReviews)

    return fetchReviewsPerOfferLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_REVIEWS_PER_OFFER,
        payload: adaptReviewsToClient(mockReviews)
      });
    });
  });

  it(`Should make a correct POST API call to /comments/:id`, () => {
    const dispatch = jest.fn();
    const postReviewLoader = postReview(mockOffer.id, mockNewReview);

    apiMock
      .onPost(`/comments/${mockOffer.id}`)
      .reply(200, mockReviews);

    return postReviewLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_REVIEWS_PER_OFFER,
        payload: adaptReviewsToClient(mockReviews)
      });
    });
  });

  it(`Should make a correct API call to hotels/:id/nearby`, () => {
    const dispatch = jest.fn();
    const fetchNearbyOffersLoader = fetchNearbyOffers(mockOffer.id);

    apiMock
      .onGet(`/hotels/${mockOffer.id}/nearby`)
      .reply(200, mockOffers)

    return fetchNearbyOffersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_NEARBY_OFFERS,
        payload: adaptOffersToClient(mockOffers)
      });
    });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const dispatch = jest.fn();
    const fetchFavoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(`/favorite`)
      .reply(200, mockOffers)

    return fetchFavoriteOffersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: adaptOffersToClient(mockOffers)
      });
    });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, () => {
    const dispatch = jest.fn();
    const updateFavoriteOfferStatusLoader = updateFavoriteOfferStatus(mockOffer.id, FavoriteStatus.ADD);

    apiMock
      .onPost(`/favorite/${mockOffer.id}/${FavoriteStatus.ADD}`)
      .reply(200, mockOffer)

    return updateFavoriteOfferStatusLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
        payload: adaptOffersToClient(mockOffer)
      });
    });
  });
});
