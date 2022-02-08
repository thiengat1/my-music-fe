/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 23:22:02
 * @LastEditTime: 2022-01-25 23:02:07
 * @LastEditors: Lewis
 */

import { combineReducers } from "redux";
import musicReducer from "./music/music.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  music: musicReducer,
  auth: authReducer,
});

export default rootReducer;
