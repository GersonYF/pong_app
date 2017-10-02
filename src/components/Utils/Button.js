import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

const Button = ({ content, _press, style, text_style }) => {
  return (
    <TouchableOpacity
      style={[STL_GLOBAL.button, { ...style }]}
      onPress={_press}
    >
      <Text style={[STL_GLOBAL.buttonText, { ...text_style }]}>{content}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  _press: PropTypes.func.isRequired
};

export default Button;
