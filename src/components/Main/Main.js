import React, { Component } from "react";
import {
  Button,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { NavigationAction } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import Routes from "../../utils/Routes";

import SideDrawer from "./SideDrawer";
import Dashboard from "../Dashboard/Dashboard";
import Games from "../Games/Games";
import Board from "../Leaderboard/Board";

const drawerRoutes = {};
drawerRoutes[Routes.DASHBOARD] = {
  path: "/Dashboard",
  screen: Dashboard
};
drawerRoutes[Routes.LEADERBOARD] = {
  path: "/Leaderboard",
  screen: Board
};
drawerRoutes[Routes.GAMES] = {
  path: "/Games",
  screen: Games
};

const MainDrawer = DrawerNavigator(drawerRoutes, {
  initialRouteName: Routes.DASHBOARD,
  drawerWidth: 250,
  contentComponent: SideDrawer
});

console.log(drawerRoutes);

export default MainDrawer;
