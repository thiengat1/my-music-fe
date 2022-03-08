/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-14 23:07:08
 * @LastEditTime: 2022-03-05 23:22:55
 * @LastEditors: Lewis
 */

import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "./Home";
import MusicType from "./Music/MusicType";
import MusicView from "./Music/MusicView";
import MyMusic from "./Music/MyMusic";
import Search from "./Music/Search";
import { handleOnSocket, handleDisconnectSocket } from "../utils/socket";
import NotFound from "../components/NotFound";


function App() {
  useEffect(() => {
    handleOnSocket("comment");
    return () => handleDisconnectSocket();
  }, []);

  const renderMainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/music/:type" element={<MusicType />} />
          <Route path="/music/view/:videoId" element={<MusicView />} />
          <Route path="/music/me" element={<MyMusic />} />
          <Route path="/music/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  };

  return <>{renderMainRoutes()}</>;
}

export default App;
