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
import STL_GAMES from "./_style";
import Routes from "../../utils/Routes";
import GameWidget from "../Dashboard/GameWidget";

const { width, height } = Dimensions.get("window");

class Games extends Component {
  constructor(props) {
    super(props);
  }

  _goToGame(game) {
    this.props.pickGame(game);
    this.props.navigation.navigate(Routes.GAME);
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
            STL_GAMES.content,
            STL_GLOBAL.padded_container,
            { width: width - 40 }
          ]}
        >
          <GameWidget
            _games={this.props.games_list}
            _goToGame={this._goToGame.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Games);
