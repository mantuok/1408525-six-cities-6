import {combineReducers} from 'redux';
import {user} from './user/user';
import {dataLoad} from './data-load/data-load';
import {dataSet} from './data-set/data-set';

export const NameSpace = {
  USER: `USER`,
  DATA_LOAD: `DATA_LOAD`,
  DATA_SET: `DATA_SET`
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA_LOAD]: dataLoad,
  [NameSpace.DATA_SET]: dataSet
});
