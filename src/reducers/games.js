import { combineReducers } from "redux";
import createReducer from "../utils/createReducer";
import * as types from "../actions/types";
import _ from "lodash";
import cloneObject from "../utils/cloneObject";

let games_initial = [];
let game_initial = {};

export const games_list = createReducer(games_initial, {
  [types.GAMES_REQUEST_SUCCESS](state, action) {
    let data = cloneObject(action.data);
    let newState = [];
    _.forEach(data, (game, key) => {
      let scores = cloneObject(game.game_score);
      delete game.game_score;
      let newGame = { ...game };
      let info = {};
      if (scores.length > 0) {
        let player1 = scores[0];
        let player2 = scores[1];
        if (player1.player.user.id === newGame.owner.user.id) {
          info.player = player1.player;
          info.player.points = player1.points;
          info.rival = player2.player;
          info.rival.points = player2.points;
        } else {
          info.rival = player1.player;
          info.rival.points = player1.points;
          info.player = player2.player;
          info.player.points = player2.points;
        }
      }
      if (info.player && info.rival) {
        if (info.player.points > info.rival.points) {
          info.player.is_winner = true;
          info.rival.is_winner = false;
        } else {
          info.player.is_winner = false;
          info.rival.is_winner = true;
        }
      }
      newGame.info = cloneObject(info);
      newState.push(newGame);
    });
    console.log(newState);
    console.log("Game");
    return newState;
  }
});

export const game_detail = createReducer(game_initial, {
  [types.GAME_DETAIL_SELECT](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  },
  [types.GAME_DETAIL_REQUEST_SUCCESS](state, action) {
    let newState = cloneObject(action.data);
    return newState;
  }
});
