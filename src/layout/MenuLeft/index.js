/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 16:23:02
 * @LastEditTime: 2022-03-08 21:39:56
 * @LastEditors: Lewis
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FormControl, Offcanvas, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoSrc from "../../assets/dance-music.gif";
import Avatar from "../../components/Avatar";
import {
  logoutUserStart,
  setModalType,
  setShowModal,
} from "../../redux/auth/auth.actions";

import LoginForm from "../../views/Auth/components/LoginForm";
import CreateMusicModal from "../../views/Music/CreateMusic";
import styles from "./MenuLeft.module.scss";

const MenuLeft = (props) => {
  const {
    setShowModal,
    setModalType,
    modalType,
    handleLogoutUser,
    token,
    username,
    show,
    handleClose,
  } = props;
  const [searchVal, setSearchVal] = useState("");
  const [active, setActive] = useState("");

  const navigate = useNavigate();
  const handleOpenModal = (type) => {
    setShowModal(true);
    setModalType(type);
  };
  const handleLogout = () => {
    handleLogoutUser();
  };

  const handleSearchMusic = () => {
    navigate("/music/search?q=" + searchVal);
    handleClose()
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSearchMusic();
    }
  };
  const handleToHome = () => {
    navigate("/");
    setActive("");
    handleClose()
  };

  const links = [
    { id: 1, link: "/music/hot", name: "hot" },
    { id: 2, link: "/music/ballad", name: "ballad" },
    { id: 3, link: "/music/rock", name: "rock" },
    { id: 4, link: "/music/rap", name: "rap" },
    // { id: 5, link: "/music/me", name: "my music" },
  ];
  const handleLinkClick = (id) => {
    setActive(id);
    handleClose()
  };


  return (
    <Offcanvas show={show} onHide={handleClose} >
      <Offcanvas.Body className={styles.container}>
        <div className={styles.headerLogo} onClick={handleToHome}>
          <img src={logoSrc} alt="logo" width="100%" height="100%" />
        </div>
        <div className={styles.mainMenus}>
          {links.map((link) => (
            <Link
              className={`${styles.navLink} ${
                active === link.id ? styles.navLinkActive : ""
              }`}
              to={link.link}
              onClick={() => handleLinkClick(link.id)}
              key={link.id}
            >
              {link.name}
            </Link>
          ))}
          {token && (
            <Link
              className={`${styles.navLink} ${styles.myMusic}`}
              to="/music/me"
              onClick={() => handleLinkClick()}
            >
              <FontAwesomeIcon
                className={`${styles.myMusicIcon}`}
                icon="fa-solid fa-headphones"
              />
              <span>my music</span>
            </Link>
          )}
        </div>
        <div className={styles.searchForm}>
          <FormControl
            type="text"
            placeholder="search..."
            className="me-2"
            aria-label="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon
            className={styles.searchFormIcon}
            icon="fa-solid fa-magnifying-glass"
          />
        </div>
        <div className={styles.rightMenus}>
          {!token && (
            <>
              <div
                className={`${styles.btn} ${styles.btnLogin}`}
                onClick={() => handleOpenModal("login")}
              >
                Login
              </div>
              <div
                className={`${styles.btn} ${styles.btnSignUp}`}
                onClick={() => handleOpenModal("signUp")}
              >
                Sign up
              </div>
            </>
          )}
          {token && (
            <>
              <div className={`${token?styles.rightMenusLogin:styles.rightMenus}`}>
                <Avatar type="header" />
                <NavDropdown title={username} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={() => handleOpenModal("createMusic")}
                  >
                    Create Music
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </>
          )}
        </div>
      </Offcanvas.Body>
      <CreateMusicModal modalType={modalType} />
      <LoginForm modalType={modalType} />
    </Offcanvas>
  );
};

const mapStateToProps = (state) => ({
  modalType: state.auth.modalType,
  token: state.auth.token,
  username: state.auth.username,
});
const mapDispatchToProps = (dispatch) => ({
  setShowModal: (params) => dispatch(setShowModal(params)),
  setModalType: (params) => dispatch(setModalType(params)),
  handleLogoutUser: (params) => dispatch(logoutUserStart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuLeft);
