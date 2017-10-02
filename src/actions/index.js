import * as NavigationActions from "./navigation";
import * as StorageActions from "./storage";
import * as AuthActions from "./auth";
import * as PlayersActions from "./players";
import * as GamesActions from "./games";

export const ActionCreators = Object.assign(
  {},
  NavigationActions,
  StorageActions,
  AuthActions,
  PlayersActions,
  GamesActions
);
