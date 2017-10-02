import APIRoutes from "../utils/APIRoutes";
import * as types from "./types";
import Routes from "../utils/Routes";
import { NavigationActions } from "react-navigation";

export function goBack(navigation) {
  return (dispatch, getState) => {
    navigation.goBack();
    //navigation.dispatch({ type: types.NAV_BACK });
  };
}

function navigateForward(state) {
  return {
    type: types.GO_FORWARD,
    state
  };
}

export function navigate(action, navigation) {
  return (dispatch, getState) => {
    dispatch(navigateForward(action));
    navigation.navigate(action.id);
  };
}

export function goToHome(navigation) {
  return (dispatch, getState) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: Routes.MAIN })]
    });
    navigation.dispatch(resetAction);
  };
}

export function goDrawerChangeItem(route) {
  return (dispatch, getState) => {
    dispatch({ type: types.DRAWER_CHANGE_ITEM, route });
  };
}

export function goToInitNav(navigation) {
  return (dispatch, getState) => {
    navigation.dispatch({ type: types.NAV_LOGIN });
  };
}
