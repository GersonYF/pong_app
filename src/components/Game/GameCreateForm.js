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

const { width, height } = Dimensions.get("window");

export default class GameCreateForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _rival, _player } = this.props;
    return (
      <View style={[STL_GLOBAL.form, STL_GLOBAL.padded_container, { width }]}>
        <View style={[STL_GLOBAL.form_group]}>
          <Text style={[STL_GLOBAL.label]}>
            {_player.user ? (
              _player.user.first_name + " " + _player.user.last_name
            ) : (
              "Player"
            )}
          </Text>
          <TextInput
            style={[STL_GLOBAL.input]}
            onChangeText={this.props._updatePlayerScore}
            value={this.props._state.player_score}
            keyboardType={"numeric"}
          />
        </View>
        <View style={[STL_GLOBAL.form_group]}>
          <Text style={[STL_GLOBAL.label]}>
            {_rival.user ? (
              _rival.user.first_name + " " + _rival.user.last_name
            ) : (
              "Rival"
            )}
          </Text>
          <TextInput
            style={[STL_GLOBAL.input]}
            onChangeText={this.props._updateRivalScore}
            value={this.props._state.rival_score}
            keyboardType={"numeric"}
          />
        </View>
        <View style={[STL_GLOBAL.form_group, { flexDirection: "row" }]}>
          <Button
            style={{ flex: 1, marginLeft: 5, marginRight: 5 }}
            text_style={{}}
            _press={this.props._cancelCreation}
            content={"Close"}
          />
          <Button
            style={{ flex: 1, marginLeft: 5, marginRight: 5 }}
            text_style={{}}
            _press={this.props._save}
            content={"Save"}
          />
        </View>
        <View />
      </View>
    );
  }
}

GameCreateForm.propTypes = {};
