/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-16 17:05:55
 * @LastEditTime: 2022-01-16 23:29:40
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import styles from "./MusicView.module.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { findMusicByIdStart } from "../../../redux/music/music.actions";

const MusicView = (props) => {
  const { musicById, handleFindMusicByIdStart } = props;
  const { videoId } = useParams();
  console.log('videoId',videoId);
  useEffect(() => {
    handleFindMusicByIdStart({ videoId: videoId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className={styles.container}>
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${musicById.videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        SECURE_REFERRER_POLICY="no-referrer-when-downgrade"
      ></iframe>
      <h3>{musicById.name}</h3>
      <p>{musicById.description}</p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  musicById: state.music.musicById,
});
const mapDispatchToProps = (dispatch) => ({
  handleFindMusicByIdStart: (payload) => dispatch(findMusicByIdStart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MusicView);
