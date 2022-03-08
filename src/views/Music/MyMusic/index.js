/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-14 23:46:05
 * @LastEditTime: 2022-03-01 22:48:55
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import MusicCard from "../../../components/MusicCard";
import { getMyMusicStart } from "../../../redux/music/music.actions";
import styles from "./MyMusic.module.scss";
import NoData from "../../../components/NoData";

const MyMusic = (props) => {
  const { myMusic, handleGetMyMusic } = props;

  useEffect(() => {
    handleGetMyMusic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {myMusic.length > 0 && <MusicCard data={myMusic} />}
      {myMusic.length <= 0 && <NoData />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  myMusic: state.music.myMusic,
});
const mapDispatchToProps = (dispatch) => ({
  handleGetMyMusic: (payload) => dispatch(getMyMusicStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
