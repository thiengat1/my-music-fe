/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-14 23:07:08
 * @LastEditTime: 2022-01-24 22:52:07
 * @LastEditors: Lewis
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "./Home";
import MusicType from "./Music/MusicType";
import MusicView from "./Music/MusicView";

function App() {


  const renderMainRoutes=()=>{
    return (
      <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/music/:type" element={<MusicType />} />
      <Route path="/music/view/:videoId" element={<MusicView />} />
      </Route>
    </Routes>
    )
  }

  return (
    <>
       {renderMainRoutes()}
    </>

  );
}

export default App;
