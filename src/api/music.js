/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-08 22:55:36
 * @LastEditTime: 2022-02-18 00:06:46
 * @LastEditors: Lewis
 */
import request from "./request";

export function getMusicTop10(params) {
  return request({
    url: "/music/top10",
    method: "get",
    params,
  });
}
export function getMusicByType(type) {
  return request({
    url: `/music/${type}`,
    method: "get",
  });
}
export function findMusicById(videoId) {
  return request({
    url: `/music/find/${videoId}`,
    method: "get",
  });
}
export function createMusic(data) {
  return request({
    url: "/music/create",
    method: "post",
    data: data,
  });
}
export function getMyMusic(params) {
  return request({
    url: "/music/me",
    method: "get",
    params
  });
}
export function searchMusic(params) {
  return request({
    url: "/music/search",
    method: "get",
    params
  });
}
