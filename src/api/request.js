/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-06 22:04:53
 * @LastEditTime: 2022-01-24 22:52:31
 * @LastEditors: Lewis
 */

import axios from "axios";
import { getToken, setToken, removeToken } from "../utils/auth";
import queryString from 'query-string'

const token = getToken();

console.log('process.env.APP_BASE_API',process.env);
console.log('token',token)
const service = axios.create({
  baseURL: 'http://localhost:3000',
  paramsSerializer:(params)=>queryString.stringify(params),
  timeout: 6000,
});

service.interceptors.request.use(
  (config) => {
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
    const res = response.data;

    if (!res.code) {
      return response;
    }

    if (res.code === 200) {
      if (response.headers.authorization) {
        setToken(response.headers.authorization);
      }
      return res;
    } else {
      removeToken();
      return Promise.reject(res);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service
