import React, { Component } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { NavigateActions } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import Routes from "../../utils/Routes";

import STL_DRAWER from "./_styles";
import STR_DRAWER from "./_string";
import Button from "../Utils/Button";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  _goToDashboard() {
    this.props.navigation.navigate(Routes.DASHBOARD);
  }

  _goToProfile() {
    this.props.navigation.navigate(Routes.PROFILE);
  }

  _goToLeaderboard() {
    this.props.navigation.navigate(Routes.LEADERBOARD);
  }

  _goToGames() {
    this.props.navigation.navigate(Routes.GAMES);
  }

  render() {
    return (
      <View style={[STL_DRAWER.side]}>
        <TouchableOpacity onPress={this._goToDashboard.bind(this)}>
          <Image source={require("../../assets/images/logo.png")} />
        </TouchableOpacity>
        <View style={[STL_DRAWER.menu]}>
          <View style={[STL_DRAWER.menu_item]}>
            <Button
              style={{
                backgroundColor: COLORS.transparent
              }}
              text_style={{
                color: COLORS.white
              }}
              _press={this._goToLeaderboard.bind(this)}
              content={STR_DRAWER.leaderboard}
            />
          </View>
          <View style={[STL_DRAWER.menu_item]}>
            <Button
              style={{
                backgroundColor: COLORS.transparent
              }}
              text_style={{
                color: COLORS.white
              }}
              _press={this._goToGames.bind(this)}
              content={STR_DRAWER.games}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
