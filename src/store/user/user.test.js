import {user} from './user';
import {ActionType} from '../action';
import {
  AuthorizationStatus
} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: ``,
        userAvatar: ``
      });
  });

  it(`Reducer should update authorization status`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};

    const updateAuthorizationStatus = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(user(state, updateAuthorizationStatus))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it(`Reducer should set correct user data`, () => {
    const state = {
      userEmail: ``,
      userAvatar: ``
    };

    const setUserData = {
      type: ActionType.SET_USER_DATA,
      payload: {
        email: `johndoe@gmail.com`,
        avatar_url: `img/1.png`
      }
    };

    expect(user(state, setUserData))
      .toEqual({userEmail: `johndoe@gmail.com`, userAvatar: `img/1.png`});
  });
});
