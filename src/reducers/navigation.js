import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import createReducer from "../utils/createReducer";
import { AppNavigator } from "../navigators/Main";
import * as actionTypes from "../actions/types";
import Routes from "../utils/Routes";
import cloneObject from "../utils/cloneObject";

const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(Routes.LOGIN)
);

export const drawer_item_select = createReducer(Routes.LEADERBOARD, {
  [actionTypes.DRAWER_CHANGE_ITEM](state, action) {
    let newState = cloneObject(action.route);
    return newState;
  }
});

export function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      console.log(state);
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
