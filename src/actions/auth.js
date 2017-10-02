import Api from "../utils/API";
import APIRoutes from "../utils/APIRoutes";
import * as types from "./types";

export function tokenLogin(params) {
  return (dispatch, getState) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return Api.post(APIRoutes.LOGIN, params)
      .then(resp => {
        console.log(resp);
        dispatch(tokenLoginSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(tokenLoginFail({ status: resp }));
      });
  };
}

export function tokenLoginSuccess({ data }) {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    data
  };
}

export function tokenLoginFail({ status }) {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    status
  };
}

export function getProfile(token) {
  return (dispatch, getState) => {
    dispatch({ type: types.PROFILE_REQUEST });
    return Api.get(APIRoutes.PROFILE, token)
      .then(resp => {
        console.log(resp);
        dispatch(getProfileSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(getProfileFail({ status: resp }));
      });
  };
}

export function getProfileSuccess({ data }) {
  return {
    type: types.PROFILE_REQUEST_SUCCESS,
    data
  };
}

export function getProfileFail({ status }) {
  return {
    type: types.PROFILE_REQUEST_FAILURE,
    status
  };
}
