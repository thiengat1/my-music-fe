/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:14:54
 * @LastEditTime: 2022-01-25 23:03:28
 * @LastEditors: Lewis
 */
import musicActionType from "./music.type";

const initialState = {
  musicTop10: [],
  err: null,
  showModal: false,
  musicByType: [],
  musicById:[]
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case musicActionType.GET_MUSIC_TOP10_START:
      return { ...state };

    case musicActionType.GET_MUSIC_TOP10_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        musicTop10: data,
      };
    }
    case musicActionType.GET_MUSIC_TOP10_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }

    case musicActionType.CREATE_MUSIC_START:
      return { ...state };

    case musicActionType.CREATE_MUSIC_SUCCESS: {
      return { ...state };
    }
    case musicActionType.CREATE_MUSIC_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }

    case musicActionType.GET_MUSIC_BY_TYPE_START:
      return { ...state };

    case musicActionType.GET_MUSIC_BY_TYPE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        musicByType: data,
      };
    }
    case musicActionType.GET_MUSIC_BY_TYPE_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }
    case musicActionType.FIND_MUSIC_BY_ID_START:
      return { ...state };

    case musicActionType.FIND_MUSIC_BY_ID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        musicById: data,
      };
    }
    case musicActionType.FIND_MUSIC_BY_ID_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }

    default:
      return { ...state };
  }
};

export default musicReducer;
