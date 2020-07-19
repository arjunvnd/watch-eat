import * as actionTypes from "./../actions/actionTypes";
const initialState = {
  pokemon: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_POKEMON_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_POKEMON_SUCCESS:
      return { ...state, pokemon: [...payload], isLoading: false };
    case actionTypes.FETCH_POKEMON_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
