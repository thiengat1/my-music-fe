/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 16:23:02
 * @LastEditTime: 2022-01-28 22:57:42
 * @LastEditors: Lewis
 */

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CreateMusicModal from "../../views/Music/CreateMusic";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setShowModal, setModalType } from "../../redux/auth/auth.actions";
import styles from "./Header.module.scss";
import LoginForm from "../../views/Auth/components/LoginForm";

const Header = (props) => {
  const { setShowModal, setModalType,modalType } = props;

  const handleOpenModal = (type) => {
      console.log('type',type);
    setShowModal(true);
    setModalType(type);
  };

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      fixed="top"
      className={styles.container}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">My Music</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.menuMain}>
            <div className="d-flex">
              <Nav.Link>
                <Link to="/music/hot">Hot</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/music/ballad">Ballad</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/music/rock">Rock</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/music/rap">Rap</Link>
              </Nav.Link>
            </div>
            <div className="d-flex">
        
              <Nav.Link onClick={()=>handleOpenModal('login')}>Login</Nav.Link>
              <Nav.Link onClick={()=>handleOpenModal('signUp')}>Sing up</Nav.Link>
              <NavDropdown title="lewis" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>handleOpenModal('createMusic')}>
                  Create Music
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CreateMusicModal modalType={modalType}/>
      <LoginForm modalType={modalType}/>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  modalType: state.auth.modalType,
});
const mapDispatchToProps = (dispatch) => ({
  setShowModal: (params) => dispatch(setShowModal(params)),
  setModalType: (params) => dispatch(setModalType(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
