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
import _ from "lodash";
import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";
import STL_DASHBOARD from "./_styles";
import STR_DASHBOARD from "./_string";
import PlayerItem from "./PlayerItem";

export default class PlayerWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _players } = this.props;
    return (
      <View style={[STL_DASHBOARD.widget_container]}>
        <View style={[STL_DASHBOARD.widget_header]}>
          <Text style={[STL_DASHBOARD.widget_title]}>
            {STR_DASHBOARD.player_widget_title}
          </Text>
          <Text style={[STL_DASHBOARD.widget_subtitle]}>
            {STR_DASHBOARD.player_widget_subtitle}
          </Text>
        </View>
        <View style={[STL_DASHBOARD.widget_content]}>
          <ScrollView>
            {_players.map((player, key) => {
              return (
                <PlayerItem
                  key={key}
                  position={key}
                  _goToPlayer={this.props._goToPlayer}
                  _choosePlayer={this.props._choosePlayer}
                  _enableChoose={this.props._enableChoose}
                  player={player}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
