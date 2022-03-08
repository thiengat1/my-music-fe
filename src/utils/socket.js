/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-23 23:13:39
 * @LastEditTime: 2022-03-05 23:39:48
 * @LastEditors: Lewis
 */
import socketIOClient from "socket.io-client";
import { store } from "../redux/store";
import {
  //saveCommentStart,
  setCommentRealTime,
} from "../redux/music/music.actions";

export const socket = socketIOClient(process.env.REACT_APP_API_URL);

export const handleOnSocket = (type) => {
  socket.on(type, (data) => {
    store.dispatch(setCommentRealTime(data));
    //store.dispatch(saveCommentStart(data));
  });
};

export const handleSendMessage = (type, data) => {
  socket.emit(type, data);
};

export const handleDisconnectSocket = () => {
  return socket.disconnect();
};
