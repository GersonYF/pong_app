import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { NavigateActions } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import STL_LOGIN from "./_styles";
import STR_LOGIN from "./_string";
import LoginForm from "./Form";

const { width, height } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _updateUsername(val) {
    this.setState({ username: val });
  }

  _updatePassword(val) {
    this.setState({ password: val });
  }

  _login() {
    this.props.tokenLogin(this.state).then(() => {
      this.props.getProfile(this.props.user.token).then(() => {
        this.props.goToHome(this.props.navigation);
      });
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[STL_GLOBAL.container, STL_GLOBAL.bg_red]}
        behavior="padding"
      >
        <Image source={require("../../assets/images/logo.png")} />
        <LoginForm
          state={this.state}
          _updateLogin={this._updateUsername.bind(this)}
          _updatePass={this._updatePassword.bind(this)}
          _login={this._login.bind(this)}
        />
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};

Login.navigationOptions = {
  title: "Login"
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
