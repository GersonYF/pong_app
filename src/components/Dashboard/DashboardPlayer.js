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
import PlayerWidget from "./PlayerWidget";

const { width, height } = Dimensions.get("window");

class TopPlayers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          STL_DASHBOARD.widget,
          STL_DASHBOARD.player_widget,
          { width: width - 40 }
        ]}
      >
        <PlayerWidget
          _goToPlayer={this.props._goToPlayer}
          _players={this.props.player_list}
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
            _press={this.props._goToPlayers}
            content={STR_DASHBOARD.see_more}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    player_list: state.player_list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayers);
