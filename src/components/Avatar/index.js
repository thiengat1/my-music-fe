/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-20 23:35:36
 * @LastEditTime: 2022-03-01 23:02:37
 * @LastEditors: Lewis
 */
import React from "react";
import { connect } from "react-redux";
import styles from "./Avatar.module.scss";

const Avatar = (props) => {
  const { username,type } = props;
  return (
    <div className={`${styles.container} ${type==='header'?styles.avatarHeader:styles.avatarComment}`}>
      <span>{username?username.substring(0, 1).toUpperCase():''}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
