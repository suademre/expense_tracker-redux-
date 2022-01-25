//  Combine reducer medhodunu kullanarak uygulamamizin hangi state parcalarina ihtiyaci oldugunu belirticez

import { combineReducers } from "redux";
import { UserState } from "../types/user";
import UserReducer from "./reducers/userReducer";

// Backenden 3 ayri veri tipi var
// 1- Users
// 2- Records
// 3- Categories

export interface AppState {
  user: UserState;
  //   categories: any;
  //   records: any;
}

const rootReducer = combineReducers<AppState>({
  user: UserReducer,
  //   categories: () => {},
  //   records: () => {},
});

export default rootReducer;
