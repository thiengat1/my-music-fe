/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:15:09
 * @LastEditTime: 2022-03-10 15:38:49
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
  findMusicByIdFailure,
  getMyMusicSuccess,
  getMyMusicFailure,
  searchMusicSuccess,
  searchMusicFailure,
  getCommentSuccess,
  getCommentFailure,
  saveCommentSuccess,
  saveCommentFailure
} from "./music.actions";
import { setShowModal } from "../auth/auth.actions";
import musicActionType from "./music.type";

import {
  getMusicTop10,
  createMusic,
  getMusicByType,
  findMusicById,
  getMyMusic,
  searchMusic,
} from "../../api/music";
import { toast } from "react-toastify";
import { getComment,saveComment } from "../../api/comment";

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
    toast.success("success");
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

function* fetchMyMusic({ payload }) {
  try {
    let res = yield getMyMusic();
    yield put(getMyMusicSuccess({ data: res.data }));
  } catch (err) {
    getMyMusicFailure({ error: err });
  }
}

function* onFetchMyMusic() {
  yield takeLatest(musicActionType.GET_MY_MUSIC_START, fetchMyMusic);
}

function* fetchSearchMusic({ payload }) {
  try {
    let res = yield searchMusic(payload);
    yield put(searchMusicSuccess({ data: res.data }));
  } catch (err) {
    searchMusicFailure({ error: err });
  }
}

function* onFetchSearchMusic() {
  yield takeLatest(musicActionType.SEARCH_MUSIC_START, fetchSearchMusic);
}

function* fetchComment({ payload }) {
  try {
    let res = yield getComment(payload);
    yield put(getCommentSuccess({ data: res.data }));
  } catch (err) {
    getCommentFailure({ error: err });
  }
}

function* onFetchComment() {
  yield takeLatest(musicActionType.GET_COMMENT_START, fetchComment);
}

function* saveCommentMusic({ payload }) {
  try {
    let res = yield saveComment(payload);
    yield put(saveCommentSuccess({ data: res.data }));
  } catch (err) {
    saveCommentFailure({ error: err });
  }
}

function* onSaveCommentMusic() {
  yield takeLatest(musicActionType.SAVE_COMMENT_START, saveCommentMusic);
}

export default function* musicSaga() {
  yield all([
    fork(onFetchMusicTop10),
    fork(onCreateMusicStart),
    fork(onFetchMusicByType),
    fork(onFetchFindMusicById),
    fork(onFetchMyMusic),
    fork(onFetchSearchMusic),
    fork(onFetchComment),
    fork(onSaveCommentMusic)
  ]);
}
