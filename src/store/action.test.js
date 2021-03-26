import {
  SortingType,
  AuthorizationStatus,
  FavoriteStatus
} from '../const';
import {
  ActionType,
  setCity,
  setOffersPerCity,
  setSorting,
  setActiveCard,
  resetDataLoadStatus,
  setUserData,
  requireAuthorization,
  loadOffers,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadReviewsPerOffer,
  changeFavoriteOfferStatus
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting active city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: `Paris`
    };

    const cityName = `Paris`;

    expect(setCity(cityName)).toEqual(expectedAction);
  });

  it(`Action creator for setting offers per active city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS_PER_CITY
    };

    expect(setOffersPerCity()).toEqual(expectedAction);
  });

  it(`Action creator for setting active sorting returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_SORTING,
      payload: SortingType.TOPRATED
    };

    const sortingType = SortingType.TOPRATED;

    expect(setSorting(sortingType)).toEqual(expectedAction);
  });

  it(`Action creator for setting active card returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: 1
    };

    const cardId = 1;

    expect(setActiveCard(cardId)).toEqual(expectedAction);
  });

  it(`Action creator for reset data load status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_DATA_LOAD_STATUS,
    };

    expect(resetDataLoadStatus()).toEqual(expectedAction);
  });

  it(`Action creator for setting user data correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_DATA,
      payload: {
        avatarUrl: "img/1.png",
        email: "Oliver.conner@gmail.com",
        id: 1,
        isPro: false,
        name: "Oliver.conner"
      }
    };

    const userData = {
      avatarUrl: "img/1.png",
      email: "Oliver.conner@gmail.com",
      id: 1,
      isPro: false,
      name: "Oliver.conner"
    };

    expect(setUserData(userData)).toEqual(expectedAction);
  });

  it(`Action creator for checking authorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    const authorizationStatus = AuthorizationStatus.AUTH;

    expect(requireAuthorization(authorizationStatus)).toEqual(expectedAction);
  });

  it(`Action creator for loading offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [
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
      ]
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

    expect(loadOffers(offers)).toEqual(expectedAction);
  });


  it(`Action creator for loading favorite offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [
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
      ]
    };

    const favoriteOffers = [
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

    expect(loadFavoriteOffers(favoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for loading nearby offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [
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
      ]
    };

    const nearbyOffers = [
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

    expect(loadNearbyOffers(nearbyOffers)).toEqual(expectedAction);
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_PER_OFFER,
      payload: [{
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
          id: 4,
          isPro: true,
          name: `Max`
        }
      }]
    };

    const reviews = [{
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        id: 4,
        isPro: true,
        name: `Max`
      }
    }];

    expect(loadReviewsPerOffer(reviews)).toEqual(expectedAction);
  });

  it(`Action creator for changing favorite status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
      payload: FavoriteStatus.ADD
    };

    const favoriteStatus = FavoriteStatus.ADD;

    expect(changeFavoriteOfferStatus(favoriteStatus)).toEqual(expectedAction);
  });
});
