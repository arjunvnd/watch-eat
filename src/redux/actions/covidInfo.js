import * as actionTypes from "./actionTypes";

export const getCovidInfoSuccess = payload => ({
  type: actionTypes.FETCH_COVID_INFO_SUCCESS,
  payload
});

export const getCovidInfoStart = payload => ({
  type: actionTypes.FETCH_COVID_INFO_START,
  payload
});

export const getCovidInfoFail = () => ({
  type: actionTypes.FETCH_COVID_INFO_FAIL
});
