/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-09 16:47:09
 * @LastEditTime: 2022-03-09 16:54:46
 * @LastEditors: Lewis
 */
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.scss";

const HomeCarousel = (props) => {
  const { data } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleView = (videoId) => {
    window.location.href = `/music/view/${videoId}`;
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.container}>
      {data.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className={styles.carouselImage}
              src={item.image}
              alt={item.name}
              onClick={() => handleView(item.videoId)}
            />
            <Carousel.Caption>
              <h3 className={styles.nameText}  onClick={() => handleView(item.videoId)}>{item.name}</h3>
              <p className={styles.captionText}>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
