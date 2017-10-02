import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TextInput
} from "react-native";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";
import STL_GAME from "./_style";
import STR_GAME from "./_string";
import Button from "../Utils/Button";

import APIRoutes from "../../utils/APIRoutes";

const { width, height } = Dimensions.get("window");

export default class GameChooser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _rival, _player } = this.props;
    return (
      <View style={[STL_GAME.chooser_container, { width }]}>
        <TouchableOpacity style={[STL_GAME.chooser_player]}>
          {_player.user ? (
            <Image
              source={{ uri: APIRoutes.ROOT + _player.picture }}
              style={{
                width: 150,
                height: 150,
                resizeMode: "cover",
                borderRadius: 75
              }}
            />
          ) : (
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          )}
          <Text style={[STL_GAME.chooser_player_name]}>
            {_player.user ? (
              _player.user.first_name + " " + _player.user.last_name
            ) : (
              "Player"
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[STL_GAME.chooser_player, STL_GAME.chooser_rival]}
          onPress={this.props._chooseRival}
        >
          {_rival.user ? (
            <Image
              source={{ uri: APIRoutes.ROOT + _rival.picture }}
              style={{
                width: 150,
                height: 150,
                resizeMode: "cover",
                borderRadius: 75
              }}
            />
          ) : (
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          )}
          <Text style={[STL_GAME.chooser_player_name]}>
            {_rival.user ? (
              _rival.user.first_name + " " + _rival.user.last_name
            ) : (
              "Rival"
            )}
          </Text>
        </TouchableOpacity>
        <View />
      </View>
    );
  }
}

GameChooser.propTypes = {};
