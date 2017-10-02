import { StyleSheet } from "react-native";
import COLORS from "../../styles/colors";

const STL_DASHBOARD = StyleSheet.create({
  widget: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    padding: 20
  },
  widget_container: {
    flex: 1
  },
  widget_header: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.red,
    paddingBottom: 10,
    marginBottom: 10
  },
  widget_title: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "bold"
  },
  widget_subtitle: {
    color: COLORS.grayDark1,
    fontSize: 18
  },
  widget_content: {
    flex: 1
  },
  widget_footer: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  player_item: {
    height: 50,
    flexDirection: "row",
    borderBottomColor: COLORS.grayLight1,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  player_item_position_container: {
    width: 50
  },
  player_item_position: {
    fontSize: 20,
    fontWeight: "bold"
  },
  player_item_name_container: {
    flex: 1
  },
  player_item_name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  player_item_motto: {},
  player_item_board_container: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  player_item_points: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.red
  },
  player_item_points_label: {
    fontSize: 10
  },
  player_item_win: {
    fontSize: 20,
    color: COLORS.grayDark2,
    fontWeight: "bold"
  },
  game_item: {
    height: 70,
    borderBottomColor: COLORS.grayLight1,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  game_item_data: {
    flexDirection: "row"
  },
  game_item_player: {
    flexDirection: "row",
    flex: 1
  },
  game_item_player_name_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  game_item_player_name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  game_item_score_container: {
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  game_item_score: {
    fontSize: 25
  },
  game_item_score_win: {
    color: COLORS.red,
    fontWeight: "bold"
  },
  game_item_date: {
    fontSize: 14
  }
});

export default STL_DASHBOARD;
