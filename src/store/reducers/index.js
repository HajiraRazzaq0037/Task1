import { combineReducers } from "redux";
import userInfo from "./infoReducer";
export const Reducers = combineReducers({
  userInfo: userInfo,
});
