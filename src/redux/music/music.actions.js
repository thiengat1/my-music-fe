/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:13:14
 * @LastEditTime: 2022-02-25 00:34:11
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

  export const getMyMusicStart = (params) => ({
    type: musicActionType.GET_MY_MUSIC_START,
    payload: params,
  });
  
  export const getMyMusicSuccess = (data) => ({
    type: musicActionType.GET_MY_MUSIC_SUCCESS,
    payload: data,
  });
  
  export const getMyMusicFailure = (error) => ({
    type: musicActionType.GET_MY_MUSIC_FAILURE,
    payload: error,
  });

  export const searchMusicStart = (params) => ({
    type: musicActionType.SEARCH_MUSIC_START,
    payload: params,
  });
  
  export const searchMusicSuccess = (data) => ({
    type: musicActionType.SEARCH_MUSIC_SUCCESS,
    payload: data,
  });
  
  export const searchMusicFailure = (error) => ({
    type: musicActionType.SEARCH_MUSIC_FAILURE,
    payload: error,
  });

  export const getCommentStart = (params) => ({
    type: musicActionType.GET_COMMENT_START,
    payload: params,
  });
  
  export const getCommentSuccess = (data) => ({
    type: musicActionType.GET_COMMENT_SUCCESS,
    payload: data,
  });
  
  export const getCommentFailure = (error) => ({
    type: musicActionType.GET_COMMENT_FAILURE,
    payload: error,
  });

  export const saveCommentStart = (params) => ({
    type: musicActionType.SAVE_COMMENT_START,
    payload: params,
  });
  
  export const saveCommentSuccess = (data) => ({
    type: musicActionType.SAVE_COMMENT_SUCCESS,
    payload: data,
  });
  
  export const saveCommentFailure = (error) => ({
    type: musicActionType.SAVE_COMMENT_FAILURE,
    payload: error,
  });
  export const setCommentRealTime = (data) => ({
    type: musicActionType.SET_COMMENT_REAL_TIME,
    payload: data,
  });