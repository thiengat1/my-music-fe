/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-06 22:04:53
 * @LastEditTime: 2022-03-10 15:32:34
 * @LastEditors: Lewis
 */

import axios from "axios";
import { getToken, setToken } from "../utils/auth";
import queryString from "query-string";
import { store } from "../redux/store";
import { setGlobalLoading,logoutUserStart } from "../redux/auth/auth.actions";
import { toast } from "react-toastify";

let token = getToken();

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 6000,
});

service.interceptors.request.use(
  (config) => {
    if(config.url!=='/comment/save'){
      store.dispatch(setGlobalLoading(true));
    }
    token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    store.dispatch(setGlobalLoading(false));
    const res = response.data;

    if (!res.code) {
      return response;
    }

    if (res.code === 200) {
      if (response.headers.authorization) {
        setToken(response.headers.authorization);
      }
      store.dispatch(setGlobalLoading(false));
      return res;
    } else {
      store.dispatch(setGlobalLoading(false));
      store.dispatch(logoutUserStart());

      return Promise.reject(res);
    }
  },
  (error) => {
    toast.error(error.toString());
    store.dispatch(setGlobalLoading(false));
    store.dispatch(logoutUserStart());
    return Promise.reject(error);
  }
);

export default service;
