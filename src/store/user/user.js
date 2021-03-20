
import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userEmail: ``,
  userAvatar: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userEmail: action.payload.email,
        userAvatar: action.payload.avatar_url
      };
  }

  return state;
};

export {user};
