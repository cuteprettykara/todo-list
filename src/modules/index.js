import { combineReducers } from 'redux';
import inputReducer from './input';
import todosReducer from './todos';

export default combineReducers({
  inputReducer,
  todosReducer
});