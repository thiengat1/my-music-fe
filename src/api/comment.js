/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-25 00:01:36
 * @LastEditTime: 2022-02-25 00:25:19
 * @LastEditors: Lewis
 */
import request from "./request";

export function getComment(params) {
  return request({
    url: "/comment/find",
    method: "get",
    params,
  });
}
export function saveComment(data) {
  return request({
    url: "/comment/save",
    method: "post",
    data: data,
  });
}
