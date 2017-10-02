import { StyleSheet } from "react-native";
import COLORS from "./colors";

const STL_GLOBAL = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.white,
    flexDirection: "column",
    flexWrap: "wrap"
  },
  padded_container: {
    padding: 20
  },
  bg_red: {
    backgroundColor: COLORS.red
  },
  form: {
    alignItems: "center",
    backgroundColor: COLORS.white50,
    borderTopColor: COLORS.white,
    borderTopWidth: 2,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2
  },
  form_group: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    alignSelf: "stretch",
    marginBottom: 20
  },
  label: {
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: COLORS.white,
    height: 40,
    alignSelf: "stretch",
    borderRadius: 20,
    textAlign: "center",
    color: COLORS.grayDark1
  },
  button: {
    height: 40,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    width: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    backgroundColor: COLORS.transparent,
    fontWeight: "bold",
    fontSize: 16
  }
});

export default STL_GLOBAL;
