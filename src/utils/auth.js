/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-06 22:34:07
 * @LastEditTime: 2022-03-11 13:22:09
 * @LastEditors: Lewis
 */

import Cookies from "js-cookie";

const tokenKey = "Admin-Token";
const userNameKey = "Username-Key";

export function getToken() {
  return Cookies.get(tokenKey);
}

export function setToken(token) {
  return Cookies.set(tokenKey, token, { expires: 6000 });
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

export function getUsername() {
  return Cookies.get(userNameKey);
}

export function setUsername(username) {
  return Cookies.set(userNameKey, username);
}

export function removeUsername() {
  return Cookies.remove(userNameKey);
}
