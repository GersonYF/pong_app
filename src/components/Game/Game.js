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

import STL_DASHBOARD from "../Dashboard/_styles";
import STL_GAME from "./_style";
import STR_GAME from "./_string";

const { width, height } = Dimensions.get("window");

import Button from "../Utils/Button";
import moment from "moment";
import APIRoutes from "../../utils/APIRoutes";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { game } = this.props;
    let datetime = moment(game.date).format("MMMM Do YYYY, h:mm:ss a");
    return (
      <View style={[STL_GLOBAL.container, STL_GLOBAL.bg_red]}>
        <View
          style={[
            {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.white,
              paddingTop: 20,
              paddingBottom: 20
            }
          ]}
        >
          <View style={[STL_DASHBOARD.game_item_data]}>
            <View style={[STL_DASHBOARD.game_item_player]}>
              <View style={[STL_DASHBOARD.game_item_player_name_container]}>
                <Text style={[STL_DASHBOARD.game_item_player_name]}>
                  {game.info.player.user.first_name +
                    " " +
                    game.info.player.user.last_name}
                </Text>
              </View>
              <View style={[STL_DASHBOARD.game_item_score_container]}>
                {game.info.player.is_winner ? (
                  <Text
                    style={[
                      STL_DASHBOARD.game_item_score,
                      STL_DASHBOARD.game_item_score_win
                    ]}
                  >
                    {game.info.player.points}
                  </Text>
                ) : (
                  <Text style={[STL_DASHBOARD.game_item_score]}>
                    {game.info.player.points}
                  </Text>
                )}
              </View>
            </View>
            <View style={[STL_DASHBOARD.game_item_player]}>
              <View style={[STL_DASHBOARD.game_item_score_container]}>
                {game.info.rival.is_winner ? (
                  <Text
                    style={[
                      STL_DASHBOARD.game_item_score,
                      STL_DASHBOARD.game_item_score_win
                    ]}
                  >
                    {game.info.rival.points}
                  </Text>
                ) : (
                  <Text style={[STL_DASHBOARD.game_item_score]}>
                    {game.info.rival.points}
                  </Text>
                )}
              </View>
              <View style={[STL_DASHBOARD.game_item_player_name_container]}>
                <Text style={[STL_DASHBOARD.game_item_player_name]}>
                  {game.info.rival.user.first_name +
                    " " +
                    game.info.rival.user.last_name}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={[STL_DASHBOARD.game_item_date]}>{datetime}</Text>
          </View>
        </View>
        <View style={[STL_GAME.game_winner_container]}>
          <Text style={[STL_GAME.game_winner_title]}>{"Winner"}</Text>
          {game.info.player.is_winner ? (
            <Image
              source={{ uri: APIRoutes.ROOT + game.info.player.picture }}
              style={[STL_GAME.game_winner_picture]}
            />
          ) : (
            <Image
              source={{ uri: APIRoutes.ROOT + game.info.rival.picture }}
              style={[STL_GAME.game_winner_picture]}
            />
          )}
          <Text style={[STL_GAME.game_winner_motto]}>
            {game.info.player.is_winner ? (
              game.info.player.motto
            ) : (
              game.info.rival.motto
            )}
          </Text>
        </View>
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
              color: COLORS.white
            }}
            _press={() => {
              this.props.goBack(this.props.navigation);
            }}
            content={"Close"}
          />
        </View>
      </View>
    );
  }
}

Game.propTypes = {
  navigation: PropTypes.object.isRequired
};

Game.navigationOptions = {
  title: "Game"
};

function mapStateToProps(state) {
  return {
    game: state.game_detail
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
