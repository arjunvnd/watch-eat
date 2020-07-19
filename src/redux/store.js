import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import basic from "./reducers/basic";

import pokemonList from "./reducers/pokemonList";
const rootReducer = combineReducers({
  basic,
  pokemonList
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);
