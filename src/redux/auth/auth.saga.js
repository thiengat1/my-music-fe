/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-17 23:34:04
 * @LastEditTime: 2022-01-27 00:02:26
 * @LastEditors: Lewis
 */
import { fork, put, all, takeLatest } from "redux-saga/effects";
import { createUser } from "../../api/auth";
import {
  createUserSuccess,
  createUserFailure,
  setShowModal,
} from "./auth.actions";
import authActionType from "./auth.type";

function* handleCreateUser({ payload }) {
  try {
    let res = yield createUser(payload);
    yield put(createUserSuccess({ data: res.data }));
    yield put(setShowModal(false));
  } catch (err) {
    createUserFailure({ error: err });
  }
}

function* onHandleCreateUser() {
  yield takeLatest(authActionType.CREATE_USER_START, handleCreateUser);
}

export default function* authSaga() {
  yield all([fork(onHandleCreateUser)]);
}
