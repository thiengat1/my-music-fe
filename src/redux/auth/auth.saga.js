/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-17 23:34:04
 * @LastEditTime: 2022-02-24 23:59:18
 * @LastEditors: Lewis
 */
import { fork, put, all, takeLatest } from "redux-saga/effects";
import { createUser, loginUser, logoutUser } from "../../api/auth";
import {
  createUserSuccess,
  createUserFailure,
  setShowModal,
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
} from "./auth.actions";
import authActionType from "./auth.type";
import { toast } from "react-toastify";
import {
  removeToken,
  removeUsername,
  setToken,
  setUsername,
} from "../../utils/auth";

function* handleCreateUser({ payload }) {
  try {
    let res = yield createUser(payload);
    yield put(createUserSuccess({ data: res.data }));
    yield put(setShowModal(false));
    toast.success("success");
  } catch (err) {
    createUserFailure({ error: err });
  }
}

function* onHandleCreateUser() {
  yield takeLatest(authActionType.CREATE_USER_START, handleCreateUser);
}

function* handleLoginUser({ payload }) {
  try {
    let res = yield loginUser(payload);
    const { token, username } = res.data;
    yield setToken(token);
    yield setUsername(username);
    yield put(loginUserSuccess(res.data));
    yield put(setShowModal(false));
  } catch (err) {
    loginUserFailure({ error: err });
  }
}

function* onHandleLoginUser() {
  yield takeLatest(authActionType.LOGIN_USER_START, handleLoginUser);
}
function* handleLogoutUser({ payload }) {
  try {
    let res = yield logoutUser();
    yield removeToken();
    yield removeUsername();
    yield put(logoutUserSuccess(res.data));
  } catch (err) {
    logoutUserFailure({ error: err });
  }
}

function* onHandleLogoutUser() {
  yield takeLatest(authActionType.LOGOUT_USER_START, handleLogoutUser);
}

export default function* authSaga() {
  yield all([
    fork(onHandleCreateUser),
    fork(onHandleLoginUser),
    fork(onHandleLogoutUser),
  ]);
}
