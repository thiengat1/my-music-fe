
/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-08 22:52:56
 * @LastEditTime: 2022-02-06 00:09:46
 * @LastEditors: Lewis
 */
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  setShowModal,
  createUserStart,
} from "../../../redux/auth/auth.actions";
import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const { showModal, setShowLoginForm, handleCreateUser, modalType } = props;

  const [formErrors, setFormErrors] = useState({});

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const handleChange = (key, value) => {
    setFormErrors(validate(formValue));
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  const handleSave = () => {
    setFormErrors(validate(formValue));
    const error = validate(formValue);
    if (Object.keys(error).length <= 0) {
      handleCreateUser(formValue);
      setFormValue({
        username: "",
        password: "",
      })
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
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const handleGetModalType = () => {
    return modalType === "signUp" ? "Sign up" : "Login";
  };

  return (
    <>
      <Modal show={showModal && modalType !== "createMusic"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{handleGetModalType()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("username", e.target.value)}
              value={formValue.username}
              placeholder="username input"
            />
            <p className={styles.formError}>{formErrors.username}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.password}
              placeholder="password input"
            />
            <p className={styles.formError}>{formErrors.password}</p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
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
});

export default connect(mapSateToProps, mapDispatchToProps)(LoginForm);
