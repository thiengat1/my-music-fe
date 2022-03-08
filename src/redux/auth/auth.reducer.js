/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:14:54
 * @LastEditTime: 2022-02-24 23:48:33
 * @LastEditors: Lewis
 */
import authActionType from "./auth.type";
import { getToken, getUsername } from "../../utils/auth";

const initialState = {
  err: null,
  showModal: false,
  modalType: null,
  token: getToken(),
  username: getUsername(),
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionType.SET_SHOW_MODAL: {
      const { payload } = action;
      return {
        ...state,
        showModal: payload,
      };
    }
    case authActionType.SET_GLOBAL_LOADING: {
      const { payload } = action;
      return {
        ...state,
        loading: payload,
      };
    }
    case authActionType.SET_MODAL_TYPE: {
      const { payload } = action;
      return {
        ...state,
        modalType: payload,
      };
    }
    case authActionType.CREATE_USER_START:
      return { ...state };

    case authActionType.CREATE_USER_SUCCESS: {
      return { ...state };
    }
    case authActionType.CREATE_USER_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }
    case authActionType.LOGIN_USER_START:
      return { ...state };

    case authActionType.LOGIN_USER_SUCCESS: {
      const { token, username } = action.payload;
      return {
        ...state,
        token: token,
        username: username,
      };
    }
    case authActionType.LOGIN_USER_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        err: error,
      };
    }
    case authActionType.LOGOUT_USER_START:
      return { ...state };

    case authActionType.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        token: '',
        username: '',
      };
    }
    case authActionType.LOGOUT_USER_FAILURE: {
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

export default authReducer;
