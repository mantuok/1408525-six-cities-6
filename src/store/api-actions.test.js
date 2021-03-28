
import {ActionType} from './action';
import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {
  fetchOffers,
  fetchOfferById
} from './api-actions';
import {adaptOffersToClient} from '../utils/adapter'

const api = createApi(() => {});

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

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
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

  // it(`Should make a correct API call to /hotels/:id`, () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const fetchOfferByIdLoader = fetchOfferById();

  //   apiMock
  //     .onGet(`/hotels`)
  //     .reply(200, mockOffer)

  //   return fetchOfferByIdLoader(dispatch, () => {}, api)
  //   .then(() => {
  //     expect(dispatch).toHaveBeenCalledTimes(1)
  //     expect(dispatch).toHaveBeenCalledWith({
  //       type: ActionType.LOAD_OFFERS,
  //       payload: adaptOffersToClient(mockOffers)
  //     });
  //   });
  // });
});
