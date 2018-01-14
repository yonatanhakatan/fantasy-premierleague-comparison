import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import cards from './defaults/cards';
import players from './defaults/players';

const defaultState = {
  cards,
  players,
};

export default createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
