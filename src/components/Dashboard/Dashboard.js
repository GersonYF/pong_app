import React, { Component } from "react";
import PropTypes from "prop-types";
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

import Routes from "../../utils/Routes";

import TopPlayers from "./DashboardPlayer";
import FreshGames from "./DashboardGame";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlayers(this.props.user.token).then(() => {
      console.log("Done Players");
    });
    this.props.getGames(this.props.user.token).then(() => {
      console.log("Done Games");
    });
  }

  _goToPlayer(player, position) {
    this.props.pickPlayer(player, position);
    this.props.navigation.navigate(Routes.PLAYER);
  }

  _goToPlayers() {
    this.props.navigation.navigate(Routes.LEADERBOARD);
  }

  _goToGame(game) {
    this.props.pickGame(game);
    this.props.navigation.navigate(Routes.GAME);
  }

  _goToGames() {
    this.props.navigation.navigate(Routes.GAMES);
  }

  _goToGameCreation() {
    this.props.navigation.navigate(Routes.GAME_CREATION);
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
        <TopPlayers
          _goToPlayer={this._goToPlayer.bind(this)}
          _goToPlayers={this._goToPlayers.bind(this)}
        />
        <FreshGames
          _goToGame={this._goToGame.bind(this)}
          _goToGames={this._goToGames.bind(this)}
          _goToGameCreation={this._goToGameCreation.bind(this)}
        />
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired
};

Dashboard.navigationOptions = {
  title: ""
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
