/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 23:21:43
 * @LastEditTime: 2022-01-27 00:03:16
 * @LastEditors: Lewis
 */
import { all, fork } from "redux-saga/effects";
import musicSaga from "./music/music.saga";
import authSaga from "./auth/auth.saga";

export default function* rootSaga() {
  yield all([fork(musicSaga), fork(authSaga)]);
}
