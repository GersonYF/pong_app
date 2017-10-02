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
import STL_PLAYER from "./_style";
import STR_PLAYER from "./_string";

import Button from "../Utils/Button";
import APIRoutes from "../../utils/APIRoutes";

const { width, height } = Dimensions.get("window");

class Player extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getPlayerGames(this.props.player.token).then(()=> {console.log("done")})
  }

  render() {
    let { player } = this.props;
    return (
      <View
        style={[
          STL_GLOBAL.container,
          STL_GLOBAL.bg_red,
          { justifyContent: "space-around" }
        ]}
      >
        <View
          style={[
            {
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              padding: 20
            }
          ]}
        >
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }
            ]}
          >
            <Image
              source={{ uri: APIRoutes.ROOT + player.picture }}
              style={{
                width: 150,
                height: 150,
                resizeMode: "cover",
                borderRadius: 75
              }}
            />
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                padding: 20
              }
            ]}
          >
            <View style={[STL_DASHBOARD.player_item_position_container]}>
              <Text style={[STL_DASHBOARD.player_item_position]}>
                {player.position + 1}
              </Text>
            </View>
            <View style={[STL_DASHBOARD.player_item_name_container]}>
              <Text style={[STL_DASHBOARD.player_item_name]}>
                {player.user.first_name + " " + player.user.last_name}
              </Text>
              <Text style={[STL_DASHBOARD.player_item_motto]}>
                {player.motto}
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: COLORS.white,
                width: width - 40,
                padding: 20
              }
            ]}
          >
            <View style={[{ justifyContent: "center", alignItems: "center" }]}>
              <Text style={[{ fontSize: 18, fontWeight: "bold" }]}>
                {"Pts"}
              </Text>
              <Text style={[{ fontSize: 16 }]}>{player.board.points}</Text>
            </View>
            <View style={[{ justifyContent: "center", alignItems: "center" }]}>
              <Text style={[{ fontSize: 18, fontWeight: "bold" }]}>{"WG"}</Text>
              <Text style={[{ fontSize: 16 }]}>{player.board.win_count}</Text>
            </View>
            <View style={[{ justifyContent: "center", alignItems: "center" }]}>
              <Text style={[{ fontSize: 18, fontWeight: "bold" }]}>{"LG"}</Text>
              <Text style={[{ fontSize: 16 }]}>{player.board.lose_count}</Text>
            </View>
          </View>
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

Player.propTypes = {
  navigation: PropTypes.object.isRequired
};

Player.navigationOptions = {
  title: "Player"
};

function mapStateToProps(state) {
  return {
    player: state.player_detail
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
