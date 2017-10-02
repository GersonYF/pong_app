import { StyleSheet } from "react-native";
import COLORS from "../../styles/colors";

const STL_GAME = StyleSheet.create({
  content: {
    backgroundColor: COLORS.white,
    flex: 1,
    borderRadius: 20
  },
  chooser_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200
  },
  chooser_player: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  chooser_player_name: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 20
  },
  chooser_rival: {
    alignItems: "flex-end"
  },
  game_winner_container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20
  },
  game_winner_title: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 22
  },
  game_winner_picture: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75
  },
  game_winner_motto: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  }
});

export default STL_GAME;
