/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-17 23:33:41
 * @LastEditTime: 2022-01-26 23:58:10
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
