/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-01-25 22:37:18
 * @LastEditTime: 2022-01-25 23:05:17
 * @LastEditors: Lewis
 */
/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-08 22:52:56
 * @LastEditTime: 2022-01-24 23:41:33
 * @LastEditors: Lewis
 */
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  createMusicStart,
  setShowCreateMusicModal,
} from "../../../redux/music/music.actions";
import styles from "./CreateForm.module.scss";

const SignUp = (props) => {
  const { showModal, setShowCreateMusicModal, handleCreateMusic } = props;

  const [formErrors, setFormErrors] = useState({});

  const [formValue, setFormValue] = useState({
    name: "",
    image: "",
    videoId: "",
    description: "",
    type: "",
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
      handleCreateMusic(formValue);
    }
  };

  const handleClose = () => {
    setShowCreateMusicModal(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.image) {
      errors.image = "Image is required";
    }
    if (!values.videoId) {
      errors.videoId = "VideoId is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.type) {
      errors.type = "Type is required";
    }
    return errors;
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Music</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("username", e.target.value)}
              value={formValue.username}
              placeholder="name input"
            />
            <p className={styles.formError}>{formErrors.name}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.image}
              placeholder="password input"
            />
            <p className={styles.formError}>{formErrors.image}</p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapSateToProps = (state) => ({
  showModal: state.music.showModal,
});
const mapDispatchToProps = (dispatch) => ({
  handleCreateMusic: (payload) => dispatch(createMusicStart(payload)),
  setShowCreateMusicModal: (payload) =>
    dispatch(setShowCreateMusicModal(payload)),
});

export default connect(mapSateToProps, mapDispatchToProps)(SignUp);
