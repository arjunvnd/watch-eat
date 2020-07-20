import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  covidInfo: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_COVID_INFO_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_COVID_INFO_SUCCESS:
      return { ...state, isLoading: false, covidInfo: payload };
    case actionTypes.FETCH_COVID_INFO_FAIL:
      return { ...state, isLoading: false, covidInfo: { ...state } };

    default:
      return state;
  }
};
