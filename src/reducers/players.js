import { combineReducers } from "redux";
import createReducer from "../utils/createReducer";
import * as types from "../actions/types";
import _ from "lodash";
import cloneObject from "../utils/cloneObject";

let players_initial = [];
let player_initial = {};

export const player_list = createReducer(players_initial, {
  [types.PLAYERS_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  }
});

export const player_detail = createReducer(player_initial, {
  [types.PLAYER_DETAIL_SELECT](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  },
  [types.PLAYER_DETAIL_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  },
  [types.PLAYER_DETAIL_GAMES_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(state);
    let data = cloneObject(action.data);
    newState.games = data;
    return newState;
  }
});
