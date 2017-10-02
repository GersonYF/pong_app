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
import GameItem from "./GameItem";

export default class GameWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _games } = this.props;
    return (
      <View style={[STL_DASHBOARD.widget_container]}>
        <View style={[STL_DASHBOARD.widget_header]}>
          <Text style={[STL_DASHBOARD.widget_title]}>
            {STR_DASHBOARD.games_widget_title}
          </Text>
          <Text style={[STL_DASHBOARD.widget_subtitle]}>
            {STR_DASHBOARD.games_widget_subtitle}
          </Text>
        </View>
        <View style={[STL_DASHBOARD.widget_content]}>
          <ScrollView>
            {_games.map((game, key) => {
              return (
                <GameItem
                  key={key}
                  position={key}
                  _goToGame={this.props._goToGame}
                  game={game}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
