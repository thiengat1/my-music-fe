/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-26 23:53:01
 * @LastEditTime: 2022-02-22 22:40:13
 * @LastEditors: Lewis
 */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from './MainLayout.module.scss'
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
