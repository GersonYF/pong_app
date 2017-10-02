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
import { NavigateActions } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import STL_LEADERBOARD from "./_style";
import PlayerWidget from "../Dashboard/PlayerWidget";

import Routes from "../../utils/Routes";

const { width, height } = Dimensions.get("window");

class Board extends Component {
  constructor(props) {
    super(props);
  }

  _goToPlayer(player, position) {
    this.props.pickPlayer(player, position);
    this.props.navigation.navigate(Routes.PLAYER);
  }

  render() {
    return (
      <View
        style={[
          STL_GLOBAL.container,
          STL_GLOBAL.padded_container,
          STL_GLOBAL.bg_red
        ]}
      >
        <View
          style={[
            STL_LEADERBOARD.content,
            STL_GLOBAL.padded_container,
            { width: width - 40 }
          ]}
        >
          <PlayerWidget
            _goToPlayer={this._goToPlayer.bind(this)}
            _players={this.props.player_list}
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);
