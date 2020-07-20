import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import basic from "./reducers/basic";

import pokemonList from "./reducers/pokemonList";
import covidInfo from "./reducers/covidInfo";

const rootReducer = combineReducers({
  basic,
  pokemonList,
  covidInfo
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);
