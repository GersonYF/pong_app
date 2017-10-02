import { combineReducers } from "redux";
import createReducer from "../utils/createReducer";
import * as types from "../actions/types";
import _ from "lodash";
import cloneObject from "../utils/cloneObject";

let user_initial = {};

export const user = createReducer(user_initial, {
  [types.LOGIN_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  },
  [types.PROFILE_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(action.data);
    newState.token = state.token;
    return newState;
  }
});
