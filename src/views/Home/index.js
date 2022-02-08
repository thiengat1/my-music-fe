/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-26 23:29:12
 * @LastEditTime: 2022-01-10 22:46:45
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeCarousel from "./components/Carousel";
import { getMusicTop10Start } from "../../redux/music/music.actions";

const HomePage = (props) => {
  const { musicTop10List, getMusicTop10 } = props;
  useEffect(() => {
    getMusicTop10();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <HomeCarousel data={musicTop10List} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  musicTop10List: state.music.musicTop10,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getMusicTop10: () => dispatch(getMusicTop10Start()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
