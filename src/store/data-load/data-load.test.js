import {dataLoad} from './data-load';
import {ActionType} from '../action';

const offer = {
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

const offers = [
  {
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
  }
];

const reviews = [
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
];

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(dataLoad(undefined, {}))
      .toEqual({
        offers: [],
        favoriteOffers: [],
        nearbyOffers: [],
        reviewsPerOffer: [],
        isDataLoaded: false
      });
  });

  it(`Reducer should update offers with loaded data`, () => {
    const state = {offers: [], isDataLoaded: false};

    const updateOffersWithLoadedData = {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };

    expect(dataLoad(state, updateOffersWithLoadedData))
      .toEqual({offers, isDataLoaded: true});
  });

  it(`Reducer should update favorite offers with loaded data`, () => {
    const state = {favoriteOffers: [], isDataLoaded: false};

    const updateFavoriteOffersWithLoadedData = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers
    };

    expect(dataLoad(state, updateFavoriteOffersWithLoadedData))
      .toEqual({favoriteOffers: offers, isDataLoaded: true});
  });

  it(`Reducer should reset isDataLoaded boolean to false`, () => {
    const state = {isDataLoaded: true};

    const resetDataLoadedBoolean = {
      type: ActionType.RESET_DATA_LOAD_STATUS
    };

    expect(dataLoad(state, resetDataLoadedBoolean))
      .toEqual({isDataLoaded: false});
  });

  it(`Reducer should update nearby offers with loaded data`, () => {
    const state = {nearbyOffers: []};

    const updateNearbyOffersWithLoadedData = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers
    };

    expect(dataLoad(state, updateNearbyOffersWithLoadedData))
      .toEqual({nearbyOffers: offers});
  });

  it(`Reducer should update reviews with loaded data`, () => {
    const state = {reviewsPerOffer: []};

    const updateReviewsWithLoadedData = {
      type: ActionType.LOAD_REVIEWS_PER_OFFER,
      payload: reviews
    };

    expect(dataLoad(state, updateReviewsWithLoadedData))
      .toEqual({reviewsPerOffer: reviews});
  });

  it(`Reducer should update favorite status per offer`, () => {
    const state = {reviewsPerOffer: []};

    const updateFavoriteStatusPerOffer = {
      type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
      payload: offer
    };

    expect(dataLoad(state, updateFavoriteStatusPerOffer))
      .toEqual({reviewsPerOffer: reviews});
  });
});

