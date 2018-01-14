import { combineReducers } from 'redux';
import cards from './cards';
import players from './players';

export default combineReducers({
  cards,
  players,
});
