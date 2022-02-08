/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 23:14:54
 * @LastEditTime: 2022-01-26 23:58:46
 * @LastEditors: Lewis
 */
import authActionType from "./auth.type";

const initialState = {
  err: null,
  showModal: false,
  modalType: null,
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

    default:
      return { ...state };
  }
};

export default authReducer;
