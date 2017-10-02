import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from "react-native";
import { NavigateActions } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import STL_DASHBOARD from "./_styles";
import STR_DASHBOARD from "./_string";

import Routes from "../../utils/Routes";

import Button from "../Utils/Button";
import GameWidget from "./GameWidget";

const { width, height } = Dimensions.get("window");

class FreshGames extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[STL_DASHBOARD.widget, { width: width - 40 }]}>
        <GameWidget
          _games={this.props.games_list}
          _goToGame={this.props._goToGame}
        />
        <View style={[STL_DASHBOARD.widget_footer]}>
          <Button
            style={{
              flex: 1,
              backgroundColor: COLORS.transparent
            }}
            text_style={{
              color: COLORS.red
            }}
            _press={this.props._goToGameCreation}
            content={STR_DASHBOARD.add_game}
          />
          <Button
            style={{
              flex: 1,
              backgroundColor: COLORS.transparent
            }}
            text_style={{
              color: COLORS.red
            }}
            _press={this.props._goToGames}
            content={STR_DASHBOARD.see_more}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    games_list: state.games_list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FreshGames);
