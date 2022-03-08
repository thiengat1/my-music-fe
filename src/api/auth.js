/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:51:40
 * @LastEditTime: 2022-02-13 00:38:44
 * @LastEditors: Lewis
 */
import request from "./request";

export function createUser(data) {
  return request({
    url: "/user/signup",
    method: "post",
    data: data,
  });
}
export function loginUser(data) {
  return request({
    url: "/user/login",
    method: "post",
    data: data,
  });
}
export function logoutUser(data) {
  return request({
    url: "/user/logout",
    method: "post",
    data: data,
  });
}