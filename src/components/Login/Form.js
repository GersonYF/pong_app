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
import STL_LOGIN from "./_styles";
import STR_LOGIN from "./_string";
import Button from "../Utils/Button";

const { width, height } = Dimensions.get("window");

const LoginForm = ({ state, _updateLogin, _updatePass, _login }) => {
  return (
    <View style={[STL_GLOBAL.form, STL_GLOBAL.padded_container, { width }]}>
      <View style={[STL_GLOBAL.form_group]}>
        <Text style={[STL_GLOBAL.label]}>{STR_LOGIN.username}</Text>
        <TextInput
          style={[STL_GLOBAL.input]}
          onChangeText={_updateLogin}
          value={state.username}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />
      </View>
      <View style={[STL_GLOBAL.form_group]}>
        <Text style={[STL_GLOBAL.label]}>{STR_LOGIN.password}</Text>
        <TextInput
          style={[STL_GLOBAL.input]}
          onChangeText={_updatePass}
          value={state.password}
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
      </View>
      <View style={[STL_GLOBAL.form_group]}>
        <Button
          style={{ width: width - 80 }}
          text_style={{}}
          _press={_login}
          content={STR_LOGIN.button}
        />
      </View>
      <View />
    </View>
  );
};

LoginForm.propTypes = {
  state: PropTypes.object.isRequired,
  _updateLogin: PropTypes.func.isRequired,
  _updatePass: PropTypes.func.isRequired,
  _login: PropTypes.func.isRequired
};

export default LoginForm;
