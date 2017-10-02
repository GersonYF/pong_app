import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";
import STL_DASHBOARD from "./_styles";
import STR_DASHBOARD from "./_string";

const { width, height } = Dimensions.get("window");

export default class PlayerItem extends Component {
  constructor(props) {
    super(props);
  }

  _goPlayer(player) {
    this.props._goToPlayer(player, this.props.position);
  }

  _choosePlayer() {
    this.props._choosePlayer(this.props.player);
  }

  render() {
    return (
      <TouchableOpacity
        style={[STL_DASHBOARD.player_item, { width: width - 80 }]}
        onPress={
          this.props._enableChoose ? (
            this._choosePlayer.bind(this)
          ) : (
            this._goPlayer.bind(this, this.props.player)
          )
        }
      >
        <View style={[STL_DASHBOARD.player_item_position_container]}>
          <Text style={[STL_DASHBOARD.player_item_position]}>
            {this.props.position + 1}
          </Text>
        </View>
        <View style={[STL_DASHBOARD.player_item_name_container]}>
          <Text style={[STL_DASHBOARD.player_item_name]}>
            {this.props.player.user.first_name +
              " " +
              this.props.player.user.last_name}
          </Text>
          <Text style={[STL_DASHBOARD.player_item_motto]}>
            {this.props.player.motto.substr(0, 20) + "..."}
          </Text>
        </View>
        <View style={[STL_DASHBOARD.player_item_board_container]}>
          <Text style={[STL_DASHBOARD.player_item_points]}>
            {this.props.player.board.points}
            <Text style={[STL_DASHBOARD.player_item_points_label]}>
              {"pts"}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
