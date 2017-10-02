import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Modal
} from "react-native";
import { NavigateActions } from "react-navigation";

import { ActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import COLORS from "../../styles/colors";
import STL_GLOBAL from "../../styles/globals";

import STL_GAME from "./_style";
import STR_GAME from "./_string";

const { width, height } = Dimensions.get("window");

import Button from "../Utils/Button";
import PlayerWidget from "../Dashboard/PlayerWidget";
import GameChooser from "./GameChooser";
import GameCreateForm from "./GameCreateForm";
import cloneObject from "../../utils/cloneObject";

import Routes from "../../utils/Routes";

import moment from "moment";

class GameCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_score: "0",
      rival: {},
      rival_score: "0",
      show_modal: false
    };
  }

  _chooseRival() {
    this.setState({ show_modal: true });
  }

  _closeModal() {
    this.setState({ show_modal: false });
  }

  _cancelCreation() {
    this.props.goBack(this.props.navigation);
  }

  _chooseRivalPlayer(player) {
    if (this.props.user.user.id === player.user.id) {
      return;
    } else {
      this.setState({ rival: player, show_modal: false });
    }
  }

  _updatePlayerScore(val) {
    this.setState({ player_score: val });
  }

  _updateRivalScore(val) {
    this.setState({ rival_score: val });
  }

  _save() {
    let data = cloneObject(this.state);
    let playerScore = parseInt(data.player_score);
    let rivalScore = parseInt(data.rival_score);
    if (
      playerScore === rivalScore ||
      (playerScore > 21 || rivalScore > 21) ||
      (playerScore < 0 || rivalScore < 0) ||
      this.props.user.user.id === this.state.rival.user.id
    ) {
    } else {
      let newGame = {
        date: moment().format("YYYY-MM-DD hh:mm:ss"),
        owner_pk: this.props.user.user.id,
        game_score: [
          {
            player_pk: this.props.user.user.id,
            points: playerScore
          },
          {
            player_pk: data.rival.user.id,
            points: rivalScore
          }
        ]
      };
      this.props.createGame(newGame, this.props.user.token).then(() => {
        this.props.getGames(this.props.user.token).then(() => {
          this.props.getPlayers(this.props.user.token).then(() => {
            this.props.goBack(this.props.navigation);
          });
        });
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[STL_GLOBAL.container, STL_GLOBAL.bg_red]}
        behavior="padding"
      >
        <GameChooser
          _player={this.props.user}
          _rival={this.state.rival}
          _chooseRival={this._chooseRival.bind(this)}
        />
        <GameCreateForm
          _player={this.props.user}
          _rival={this.state.rival}
          _state={this.state}
          _updatePlayerScore={this._updatePlayerScore.bind(this)}
          _updateRivalScore={this._updateRivalScore.bind(this)}
          _save={this._save.bind(this)}
          _cancelCreation={this._cancelCreation.bind(this)}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.show_modal}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={[
              STL_GAME.content,
              STL_GLOBAL.padded_container,
              { width: width }
            ]}
          >
            <PlayerWidget
              _choosePlayer={this._chooseRivalPlayer.bind(this)}
              _enableChoose={true}
              _players={this.props.player_list}
            />
            <View
              style={[
                { height: 40, alignItems: "center", justifyContent: "center" }
              ]}
            >
              <Button
                style={{
                  flex: 1,
                  backgroundColor: COLORS.transparent
                }}
                text_style={{
                  color: COLORS.red
                }}
                _press={this._closeModal.bind(this)}
                content={"Close"}
              />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}

GameCreate.propTypes = {
  navigation: PropTypes.object.isRequired
};

GameCreate.navigationOptions = {
  title: "Game Creation"
};

function mapStateToProps(state) {
  return {
    player_list: state.player_list,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCreate);
