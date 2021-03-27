import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../services/api';
import {user} from './user';
import {ActionType} from '../action';
import {
  checkAuth,
  login,
  logout
} from '../api-actions';
import {
  AuthorizationStatus
} from '../../const';

const api = createApi(() => {});

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined,{}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: ``,
        userAvatar: ``
      })
  });

  it(`Reducer should update authorization status`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH}

    const updateAuthorizationStatus = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    }

    expect(user(state, updateAuthorizationStatus))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH})
  });

  it(`Reducer should set correct user data`, () => {
    const state = {
      userEmail: ``,
      userAvatar: ``
    }

    const setUserData = {
      type: ActionType.SET_USER_DATA,
      payload: {
        email: `johndoe@gmail.com`,
        avatar_url: `img/1.png`
      }
    }

    expect(user(state, setUserData))
      .toEqual({userEmail: `johndoe@gmail.com`, userAvatar: `img/1.png`})
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct GET call to API login`, () => {
    const apiMock = new MockAdapter(api);
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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `johndoe@gmail.com`, password: `12345`};
    const loginLoader = login(fakeUser);

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
    const apiMock = new MockAdapter(api);
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


});
