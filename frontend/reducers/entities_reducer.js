import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import AssetsReducer from './assets_reducer';

export default combineReducers({
  user: UserReducer,
  assets: AssetsReducer,
});