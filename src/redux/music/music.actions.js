/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:13:14
 * @LastEditTime: 2022-01-25 23:03:15
 * @LastEditors: Lewis
 */
import musicActionType from "./music.type";

export const getMusicTop10Start = (params) => ({
  type: musicActionType.GET_MUSIC_TOP10_START,
  payload: params,
});

export const getMusicTop10Success = (data) => ({
  type: musicActionType.GET_MUSIC_TOP10_SUCCESS,
  payload: data,
});

export const getMusicTop10Failure = (error) => ({
  type: musicActionType.GET_MUSIC_TOP10_FAILURE,
  payload: error,
});

export const createMusicStart = (params) => ({
  type: musicActionType.CREATE_MUSIC_START,
  payload: params,
});

export const createMusicSuccess = (data) => ({
  type: musicActionType.CREATE_MUSIC_SUCCESS,
  payload: data,
});

export const createMusicFailure = (error) => ({
  type: musicActionType.CREATE_MUSIC_FAILURE,
  payload: error,
});

  export const getMusicByTypeStart = (params) => ({
    type: musicActionType.GET_MUSIC_BY_TYPE_START,
    payload: params,
  });
  
  export const getMusicByTypeSuccess = (data) => ({
    type: musicActionType.GET_MUSIC_BY_TYPE_SUCCESS,
    payload: data,
  });
  
  export const getMusicByTypeFailure = (error) => ({
    type: musicActionType.GET_MUSIC_BY_TYPE_FAILURE,
    payload: error,
  });

  export const findMusicByIdStart = (params) => ({
    type: musicActionType.FIND_MUSIC_BY_ID_START,
    payload: params,
  });
  
  export const findMusicByIdSuccess = (data) => ({
    type: musicActionType.FIND_MUSIC_BY_ID_SUCCESS,
    payload: data,
  });
  
  export const findMusicByIdFailure = (error) => ({
    type: musicActionType.FIND_MUSIC_BY_ID_FAILURE,
    payload: error,
  });