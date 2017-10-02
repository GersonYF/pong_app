import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";
import STL_DASHBOARD from "./_styles";
import STR_DASHBOARD from "./_string";

import moment from "moment";

const { width, height } = Dimensions.get("window");

export default class GameItem extends Component {
  constructor(props) {
    super(props);
  }

  _selectGame(game) {
    this.props._goToGame(game);
  }

  render() {
    let { game } = this.props;
    let datetime = moment(game.date).format("MMMM Do YYYY, h:mm:ss a");
    return (
      <TouchableOpacity
        style={[STL_DASHBOARD.game_item, { width: width - 80 }]}
        onPress={this._selectGame.bind(this, game)}
      >
        <View style={[STL_DASHBOARD.game_item_data]}>
          <View style={[STL_DASHBOARD.game_item_player]}>
            <View style={[STL_DASHBOARD.game_item_player_name_container]}>
              <Text style={[STL_DASHBOARD.game_item_player_name]}>
                {game.info.player.user.first_name +
                  " " +
                  game.info.player.user.last_name}
              </Text>
            </View>
            <View style={[STL_DASHBOARD.game_item_score_container]}>
              {game.info.player.is_winner ? (
                <Text
                  style={[
                    STL_DASHBOARD.game_item_score,
                    STL_DASHBOARD.game_item_score_win
                  ]}
                >
                  {game.info.player.points}
                </Text>
              ) : (
                <Text style={[STL_DASHBOARD.game_item_score]}>
                  {game.info.player.points}
                </Text>
              )}
            </View>
          </View>
          <View style={[STL_DASHBOARD.game_item_player]}>
            <View style={[STL_DASHBOARD.game_item_score_container]}>
              {game.info.rival.is_winner ? (
                <Text
                  style={[
                    STL_DASHBOARD.game_item_score,
                    STL_DASHBOARD.game_item_score_win
                  ]}
                >
                  {game.info.rival.points}
                </Text>
              ) : (
                <Text style={[STL_DASHBOARD.game_item_score]}>
                  {game.info.rival.points}
                </Text>
              )}
            </View>
            <View style={[STL_DASHBOARD.game_item_player_name_container]}>
              <Text style={[STL_DASHBOARD.game_item_player_name]}>
                {game.info.rival.user.first_name +
                  " " +
                  game.info.rival.user.last_name}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[STL_DASHBOARD.game_item_date]}>{datetime}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
