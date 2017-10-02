import Api from "../utils/API";
import APIRoutes from "../utils/APIRoutes";
import * as types from "./types";

export function getGames(token) {
  return (dispatch, getState) => {
    dispatch({ type: types.GAMES_REQUEST });
    return Api.get(APIRoutes.GAMES, token)
      .then(resp => {
        console.log(resp);
        dispatch(gamesSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(gamesFail({ status: resp }));
      });
  };
}

export function gamesSuccess({ data }) {
  return {
    type: types.GAMES_REQUEST_SUCCESS,
    data
  };
}

export function gamesFail({ status }) {
  return {
    type: types.GAMES_REQUEST_FAILURE,
    status
  };
}

export function createGame(params, token) {
  return (dispatch, getState) => {
    dispatch({ type: types.GAME_CREATION_REQUEST });
    return Api.post(APIRoutes.GAMES, params, token)
      .then(resp => {
        console.log(resp);
        dispatch(createGameSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(createGameFail({ status: resp }));
      });
  };
}

export function createGameSuccess({ data }) {
  return {
    type: types.GAME_CREATION_REQUEST_SUCCESS,
    data
  };
}

export function createGameFail({ status }) {
  return {
    type: types.GAME_CREATION_REQUEST_FAILURE,
    status
  };
}

export function pickGame(game) {
  return (dispatch, getState) => {
    dispatch({ type: types.GAME_DETAIL_SELECT, data: game });
  };
}

export function getGame(game, token) {
  return (dispatch, getState) => {
    dispatch({ type: types.GAME_DETAIL_REQUEST });
    return Api.get(APIRoutes.GAMES + game + "/", token)
      .then(resp => {
        console.log(resp);
        dispatch(getGameSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(getGameFail({ status: resp }));
      });
  };
}

export function getGameSuccess({ data }) {
  return {
    type: types.GAME_DETAIL_REQUEST_SUCCESS,
    data
  };
}

export function getGameFail({ status }) {
  return {
    type: types.GAME_DETAIL_REQUEST_FAILURE,
    status
  };
}
