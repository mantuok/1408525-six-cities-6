import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.DATA_SET].authorizationStatus;
export const getUserEmail = (state) => state[NameSpace.DATA_SET].userEmail;
export const getUserAvatar = (state) => state[NameSpace.DATA_SET].userAvatar;
