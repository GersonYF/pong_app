import { StyleSheet } from "react-native";
import COLORS from "../../styles/colors";

const STL_DRAWER = StyleSheet.create({
  side: {
    flexDirection: "column",
    backgroundColor: COLORS.red,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  menu: {
    flex: 1,
    marginTop: 50
  },
  menu_item: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    marginBottom: 10,
    width: 230,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default STL_DRAWER;
