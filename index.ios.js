/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import RNAPP from "./src/app";

export default class pong extends Component {
  render() {
    return <RNAPP />;
  }
}

AppRegistry.registerComponent("pong", () => pong);
