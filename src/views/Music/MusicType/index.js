/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-14 23:46:05
 * @LastEditTime: 2022-01-24 23:17:45
 * @LastEditors: Lewis
 */
import React, { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./MusicType.module.scss";
import { getMusicByTypeStart } from "../../../redux/music/music.actions";

const MusicType = (props) => {
  const { musicByType, handleGetMusicByType } = props;

  const { type } = useParams();

  useEffect(() => {
    handleGetMusicByType({ type: type });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  const handleView = (videoId) => {
    window.location.href = `/music/view/${videoId}`;
  };

  return (
    <div className={styles.container}>
      <Row>
        {musicByType.map((item) => {
          return (
            <Col xs={4} md={4} key={item.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className={styles.cardImage}
                  onClick={() => handleView(item.videoId)}
                />
                <Card.Body>
                  <Card.Title
                    className={styles.cartTitle}
                    onClick={() => handleView(item.videoId)}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text className={styles.cartDescription}>
                    {item.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className={styles.viewButton}
                    onClick={() => handleView(item.videoId)}
                  >
                    View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
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
