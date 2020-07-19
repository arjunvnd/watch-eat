import * as actionTypes from "./actionTypes";

export const getPokemonSuccess = payload => ({
  type: actionTypes.FETCH_POKEMON_SUCCESS,
  payload
});

export const getPokemonStart = payload => ({
  type: actionTypes.FETCH_POKEMON_START,
  payload
});

export const getPokemonFail = () => ({
  type: actionTypes.FETCH_POKEMON_FAIL
});
