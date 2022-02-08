/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:15:09
 * @LastEditTime: 2022-01-25 23:06:58
 * @LastEditors: Lewis
 */

import { fork, put, all, takeLatest } from "redux-saga/effects";
import {
  getMusicTop10Success,
  getMusicTop10Failure,
  createMusicSuccess,
  createMusicFailure,
  getMusicByTypeSuccess,
  getMusicByTypeFailure,
  findMusicByIdSuccess,
  findMusicByIdFailure
} from "./music.actions";
import {setShowModal} from '../auth/auth.actions'
import musicActionType from "./music.type";

import { getMusicTop10, createMusic, getMusicByType,findMusicById } from "../../api/music";

function* fetchMusicTop10({ payload }) {
  try {
    let res = yield getMusicTop10();
    yield put(getMusicTop10Success({ data: res.data }));
  } catch (err) {
    getMusicTop10Failure({ error: err });
  }
}

function* onFetchMusicTop10() {
  yield takeLatest(musicActionType.GET_MUSIC_TOP10_START, fetchMusicTop10);
}
function* createMusicStart({ payload }) {
  try {
    let res = yield createMusic(payload);
    yield put(createMusicSuccess({ data: res.data }));
    yield put(setShowModal(false));
  } catch (err) {
    createMusicFailure({ error: err });
  }
}

function* onCreateMusicStart() {
  yield takeLatest(musicActionType.CREATE_MUSIC_START, createMusicStart);
}

function* fetchMusicByType({ payload }) {
  try {
    const { type } = payload;
    let res = yield getMusicByType(type);
    yield put(getMusicByTypeSuccess({ data: res.data }));
  } catch (err) {
    getMusicByTypeFailure({ error: err });
  }
}

function* onFetchMusicByType() {
  yield takeLatest(musicActionType.GET_MUSIC_BY_TYPE_START, fetchMusicByType);
}

function* fetchFindMusicById({ payload }) {
    try {
        console.log('payload',payload);
      const { videoId } = payload;
      let res = yield findMusicById(videoId);
      yield put(findMusicByIdSuccess({ data: res.data }));
    } catch (err) {
        findMusicByIdFailure({ error: err });
    }
  }
  
  function* onFetchFindMusicById() {
    yield takeLatest(musicActionType.FIND_MUSIC_BY_ID_START, fetchFindMusicById);
  }

export default function* musicSaga() {
  yield all([
    fork(onFetchMusicTop10),
    fork(onCreateMusicStart),
    fork(onFetchMusicByType),
    fork(onFetchFindMusicById)
  ]);
}
