/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-14 23:46:05
 * @LastEditTime: 2022-02-27 23:18:46
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import MusicCard from "../../../components/MusicCard";
import { searchMusicStart } from "../../../redux/music/music.actions";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import NoData from "../../../components/NoData";

const SearchMusic = (props) => {
  const { searchMusic, handleGetSearchMusic } = props;
  const useQuery = () => {
    const { search } = useLocation();
    const searchParams = React.useMemo(
      () => new URLSearchParams(search),
      [search]
    );
    return searchParams;
  };
  const query = useQuery();
  const searchValue = query.get("q");

  useEffect(() => {
    handleGetSearchMusic({ search: searchValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className={styles.container}>
      {searchMusic.length > 0 && <MusicCard data={searchMusic} />}
      {searchMusic.length <= 0 && <NoData />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchMusic: state.music.searchMusic,
});
const mapDispatchToProps = (dispatch) => ({
  handleGetSearchMusic: (payload) => dispatch(searchMusicStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMusic);
