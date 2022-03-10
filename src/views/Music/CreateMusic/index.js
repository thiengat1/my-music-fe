/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-08 22:52:56
 * @LastEditTime: 2022-03-10 10:20:04
 * @LastEditors: Lewis
 */
import React, { useState ,useEffect} from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createMusicStart } from "../../../redux/music/music.actions";
import { setShowModal } from "../../../redux/auth/auth.actions";
import styles from "./CreateForm.module.scss";

const CreateMusic = (props) => {
  const { showModal, setShowCreateMusicModal, handleCreateMusic, modalType } = props;

  const [formErrors, setFormErrors] = useState({});

  const [formValue, setFormValue] = useState({
    name: "",
    image: "",
    videoId: "",
    description: "",
    type: "",
  });
  useEffect(()=>{
    return(
      setFormValue({
        name: "",
        image: "",
        videoId: "",
        description: "",
        type: "",
      })
    )
  },[showModal])
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
      handleCreateMusic(formValue);
    }
  };

  const handleClose = () => {
    setShowCreateMusicModal(false);
    setFormErrors({});
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
      <Modal
        show={showModal && modalType === "createMusic"}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Music</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("name", e.target.value)}
              value={formValue.name}
              placeholder="name input"
            />
            <p className={styles.formError}>{formErrors.name}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image link: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("image", e.target.value)}
              value={formValue.image}
              placeholder="image input"
            />
            <p className={styles.formError}>{formErrors.image}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Youtube Video Id: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("videoId", e.target.value)}
              value={formValue.videoId}
              placeholder="videoId input"
            />
            <p className={styles.formError}>{formErrors.videoId}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("description", e.target.value)}
              value={formValue.description}
              placeholder="description input"
            />
            <p className={styles.formError}>{formErrors.description}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("type", e.target.value)}
              value={formValue.type}
              placeholder="type input"
            />
            <p className={styles.formError}>{formErrors.type}</p>
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
  showModal: state.auth.showModal,
});
const mapDispatchToProps = (dispatch) => ({
  handleCreateMusic: (payload) => dispatch(createMusicStart(payload)),
  setShowCreateMusicModal: (payload) => dispatch(setShowModal(payload)),
});

export default connect(mapSateToProps, mapDispatchToProps)(CreateMusic);
