import Api from "../utils/API";
import APIRoutes from "../utils/APIRoutes";
import * as types from "./types";

export function getPlayers(token) {
  return (dispatch, getState) => {
    dispatch({ type: types.PLAYERS_REQUEST });
    return Api.get(APIRoutes.PLAYERS, token)
      .then(resp => {
        console.log(resp);
        dispatch(playersSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(playersFail({ status: resp }));
      });
  };
}

export function playersSuccess({ data }) {
  return {
    type: types.PLAYERS_REQUEST_SUCCESS,
    data
  };
}

export function playersFail({ status }) {
  return {
    type: types.PLAYERS_REQUEST_FAILURE,
    status
  };
}

export function pickPlayer(player, position) {
  return (dispatch, getState) => {
    player.position = position;
    dispatch({ type: types.PLAYER_DETAIL_SELECT, data: player });
  };
}

export function getPlayer(player, token) {
  return (dispatch, getState) => {
    dispatch({ type: types.PLAYER_DETAIL_REQUEST });
    return Api.get(APIRoutes.PLAYERS + player + "/", token)
      .then(resp => {
        console.log(resp);
        dispatch(getPlayerSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(getPlayerFail({ status: resp }));
      });
  };
}

export function getPlayerSuccess({ data }) {
  return {
    type: types.PLAYER_DETAIL_REQUEST_SUCCESS,
    data
  };
}

export function getPlayerFail({ status }) {
  return {
    type: types.PLAYER_DETAIL_REQUEST_FAILURE,
    status
  };
}

export function getPlayerGames(token) {
  return (dispatch, getState) => {
    dispatch({ type: types.PLAYER_DETAIL_GAMES_REQUEST });
    return Api.get(APIRoutes.PLAYER_GAMES, token)
      .then(resp => {
        console.log(resp);
        dispatch(getPlayerGamesSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(getPlayerGamesFail({ status: resp }));
      });
  };
}

export function getPlayerGamesSuccess({ data }) {
  return {
    type: types.PLAYER_DETAIL_GAMES_REQUEST_SUCCESS,
    data
  };
}

export function getPlayerGamesFail({ status }) {
  return {
    type: types.PLAYER_DETAIL_GAMES_REQUEST_FAILURE,
    status
  };
}
