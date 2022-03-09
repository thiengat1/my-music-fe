/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-16 23:47:47
 * @LastEditTime: 2022-03-09 17:05:47
 * @LastEditors: Lewis
 */
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./MusicCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MusicCard = (props) => {
  const { data } = props;
  const handleView = (videoId) => {
    window.location.href = `/music/view/${videoId}`;
  };
  return (
    <Row>
      {data.map((item,index) => {
        return (
          <Col xs={6} md={4} lg={3} xl={3} key={index}>
            <Card className={styles.container}> 
              <Card.Img
                variant="top"
                src={item.image}
                className={styles.cardImage}
                onClick={() => handleView(item.videoId)}
              />
              <Card.Body>
                <Card.Title
                  className={styles.cardTitle}
                  onClick={() => handleView(item.videoId)}
                >
                  {item.name}
                </Card.Title>
                <Card.Text className={styles.cardDescription}>
                  {item.description}
                </Card.Text>
                <Card.Text className={styles.cardPost}>
                <FontAwesomeIcon className={styles.cardPostIcon} icon="fa-solid fa-user-tie" />
                <span>{item.author}</span>
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
  );
};
export default MusicCard;
