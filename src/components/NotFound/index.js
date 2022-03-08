/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-27 23:25:28
 * @LastEditTime: 2022-02-27 23:41:42
 * @LastEditors: Lewis
 */
import React from "react";
import styles from "./NotFound.module.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h5>Oops! This page could not be found</h5>
      <Button onClick={handleGoToHome}>go to HomePage</Button>
    </div>
  );
};
export default NotFound;
