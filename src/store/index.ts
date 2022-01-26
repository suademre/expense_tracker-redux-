//  Combine reducer medhodunu kullanarak uygulamamizin hangi state parcalarina ihtiyaci oldugunu belirticez

import { combineReducers } from "redux";
import { CategoryState } from "../types/category";
import { UserState } from "../types/user";
import categoryReducer from "./reducers/categoryReducer";
import userReducer from "./reducers/userReducer";

// Backenden 3 ayri veri tipi var
// 1- Users
// 2- Records
// 3- Categories

export interface AppState {
  user: UserState;
  categories: CategoryState;
  //   records: any;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  //   records: () => {},
});

export default rootReducer;
