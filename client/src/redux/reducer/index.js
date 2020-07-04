import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import sortReducer from './sortReducer';

export default combineReducers({
  usersReducer: usersReducer,
  sortReducer: sortReducer,
});
