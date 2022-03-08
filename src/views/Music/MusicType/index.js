/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-14 23:46:05
 * @LastEditTime: 2022-03-01 22:47:57
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MusicCard from "../../../components/MusicCard";
import { getMusicByTypeStart } from "../../../redux/music/music.actions";
import styles from "./MusicType.module.scss";
import NoData from "../../../components/NoData";

const MusicType = (props) => {
  const { musicByType, handleGetMusicByType } = props;

  const { type } = useParams();

  useEffect(() => {
    handleGetMusicByType({ type: type });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className={styles.container}>
      {musicByType.length > 0 && <MusicCard data={musicByType} />}
      {musicByType.length <= 0 && <NoData />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  musicByType: state.music.musicByType,
});
const mapDispatchToProps = (dispatch) => ({
  handleGetMusicByType: (payload) => dispatch(getMusicByTypeStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicType);
