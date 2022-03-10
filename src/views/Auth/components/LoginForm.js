/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-08 22:52:56
 * @LastEditTime: 2022-03-10 10:19:24
 * @LastEditors: Lewis
 */
import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  setShowModal,
  createUserStart,
  loginUserStart,
} from "../../../redux/auth/auth.actions";
import styles from "./LoginForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = (props) => {
  const {
    showModal,
    setShowLoginForm,
    handleCreateUser,
    modalType,
    handleLoginUser,
  } = props;

  const [formErrors, setFormErrors] = useState({});

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    return setFormValue({
      username: "",
      password: "",
    });
  }, [showModal]);
  const handleChange = (key, value) => {
    //setFormErrors(validate(formValue));
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  const handleSave = () => {
    setFormErrors(validate(formValue));
    const error = validate(formValue);
    if (Object.keys(error).length <= 0) {
      if (modalType === "signUp") {
        handleCreateUser(formValue);
      } else {
        handleLoginUser(formValue);
      }
    }
  };

  const handleClose = () => {
    setShowLoginForm(false);
    setFormErrors({});
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };
  const handleGetModalType = () => {
    return modalType === "signUp" ? "Sign up" : "Login";
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSave();
    }
  };

  return (
    <>
      <Modal
        show={showModal && modalType !== "createMusic"}
        onHide={handleClose}
      >
        <Modal.Header closeButton className={styles.loginHeader}>
          <Modal.Title className={styles.loginTitle}>
            {handleGetModalType()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className={`${styles.loginUser} ${styles.loginUsername}`}>
            <FontAwesomeIcon
              className={styles.usernameIcon}
              icon="fa-solid fa-user"
            />
            <Form.Control
              type="text"
              onChange={(e) => handleChange("username", e.target.value)}
              value={formValue.username}
              placeholder="username"
              className={styles.usernameInput}
            />
          </Form.Group>
          <p className={styles.formError}>{formErrors.username}</p>
          <Form.Group className={`${styles.loginUser} ${styles.loginPassword}`}>
            <FontAwesomeIcon
              className={styles.passwordIcon}
              icon="fa-solid fa-lock"
            />
            <Form.Control
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.password}
              placeholder="password"
              onKeyPress={handleKeyPress}
              className={styles.passwordInput}
            />
          </Form.Group>
          <p className={styles.formError}>{formErrors.password}</p>
        </Modal.Body>
        <Modal.Footer className={styles.loginFooter}>
          <Button
            variant="primary"
            onClick={handleSave}
            className={styles.btnLogin}
          >
            {handleGetModalType()}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapSateToProps = (state) => ({
  showModal: state.auth.showModal,
});
const mapDispatchToProps = (dispatch) => ({
  setShowLoginForm: (payload) => dispatch(setShowModal(payload)),
  handleCreateUser: (payload) => dispatch(createUserStart(payload)),
  handleLoginUser: (payload) => dispatch(loginUserStart(payload)),
});

export default connect(mapSateToProps, mapDispatchToProps)(LoginForm);
