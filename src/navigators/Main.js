import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  addNavigationHelpers,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";

import Routes from "../utils/Routes";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import GameCreate from "../components/Game/GameCreate";
import Game from "../components/Game/Game";
import Player from "../components/Player/Player";

const ROUTING = {};
ROUTING[Routes.LOGIN] = {
  screen: Login
};
ROUTING[Routes.MAIN] = {
  screen: Main,
  navigationOptions: { header: null }
};
ROUTING[Routes.GAME_CREATION] = {
  screen: GameCreate,
  navigationOptions: { header: null }
};
ROUTING[Routes.GAME] = {
  screen: Game,
  navigationOptions: { header: null }
};
ROUTING[Routes.PLAYER] = {
  screen: Player,
  navigationOptions: { header: null }
};

export const AppNavigator = StackNavigator(ROUTING, {
  headerMode: "none",
  mode: "card"
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
