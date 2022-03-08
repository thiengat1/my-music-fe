/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-17 23:33:41
 * @LastEditTime: 2022-02-13 23:37:45
 * @LastEditors: Lewis
 */
import authActionType from "./auth.type";

export const setShowModal = (payload) => ({
  type: authActionType.SET_SHOW_MODAL,
  payload: payload,
});
export const setModalType = (payload) => ({
  type: authActionType.SET_MODAL_TYPE,
  payload: payload,
});

export const createUserStart = (params) => ({
  type: authActionType.CREATE_USER_START,
  payload: params,
});

export const createUserSuccess = (data) => ({
  type: authActionType.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserFailure = (error) => ({
  type: authActionType.CREATE_USER_FAILURE,
  payload: error,
});
export const loginUserStart = (params) => ({
  type: authActionType.LOGIN_USER_START,
  payload: params,
});

export const loginUserSuccess = (data) => ({
  type: authActionType.LOGIN_USER_SUCCESS,
  payload: data,
});

export const loginUserFailure = (error) => ({
  type: authActionType.LOGIN_USER_FAILURE,
  payload: error,
});
export const logoutUserStart = (params) => ({
  type: authActionType.LOGOUT_USER_START,
  payload: params,
});

export const logoutUserSuccess = (data) => ({
  type: authActionType.LOGOUT_USER_SUCCESS,
  payload: data,
});

export const logoutUserFailure = (error) => ({
  type: authActionType.LOGOUT_USER_FAILURE,
  payload: error,
});
export const setGlobalLoading = (payload) => ({
  type: authActionType.SET_GLOBAL_LOADING,
  payload: payload,
});