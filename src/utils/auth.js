/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-06 22:34:07
 * @LastEditTime: 2022-01-06 23:28:36
 * @LastEditors: Lewis
 */

import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
