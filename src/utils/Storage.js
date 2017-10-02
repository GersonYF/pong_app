import { AsyncStorage } from "react-native";
import { LOCAL_STORAGE } from "./strings";

export default class StoreIt {
  static storeHalls = {
    AUTH: "auth",
    PLAYERS: "players",
    GAMES: "games"
  };

  static async getItems(key) {
    try {
      let data = await AsyncStorage.getItem(LOCAL_STORAGE + key);
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
  }

  static async write(key, data) {
    try {
      let strData = JSON.stringify(data);
      await AsyncStorage.setItem(LOCAL_STORAGE + key, strData);
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(LOCAL_STORAGE + key);
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
}
