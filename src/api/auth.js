/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:51:40
 * @LastEditTime: 2022-01-26 23:54:16
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
