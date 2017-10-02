import * as types from "./types";
import StoreIt from "../utils/Storage";
import _ from "lodash";

export function writeAuth(data) {
  return (dispatch, getState) => {
    dispatch({ type: types.WRITE_LOGIN });
    return StoreIt.write(StoreIt.storeHalls.AUTH, data);
  };
}

export function readAuth() {
  return (dispatch, getState) => {
    dispatch({ type: types.READ_AUTH });
    return StoreIt.getItems(StoreIt.storeHalls.AUTH).then(data => {
      if (data) {
        console.log("readAuth", data);
        dispatch({ type: types.READ_AUTH_SUCCESS, data: data });
      }
    });
  };
}

export function deleteDataSession() {
  return (dispatch, getState) => {
    dispatch({ type: types.DELETE_DATA_SESSION });
    return StoreIt.deleteAll();
  };
}
