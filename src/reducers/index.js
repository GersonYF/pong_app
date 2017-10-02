import { combineReducers } from "redux";
import * as navigationReducer from "./navigation";
import * as authReducer from "./auth";
import * as playersReducer from "./players";
import * as gamesReducer from "./games";

export default combineReducers(
  Object.assign(navigationReducer, authReducer, playersReducer, gamesReducer)
);
