/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 22:29:25
 * @LastEditTime: 2022-03-02 00:01:02
 * @LastEditors: Lewis
 */
import React from "react";
import styles from "./Footer.module.scss";
import { Navbar } from "react-bootstrap";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const socials = [
    {
      id: 1,
      name: "facebook",
      link: "https://www.facebook.com/thien.nguyenvan.353",
      icon: "fa-brands fa-facebook",
    },
    {
      id: 2,
      name: "github",
      link: "https://github.com/thiengat1",
      icon: "fa-brands fa-github",
    },
    {
      id: 3,
      name: "gmail",
      link: "https://mail.google.com/mail/u/0/#inbox",
      icon: "fa-solid fa-envelope",
    },
    {
      id: 4,
      name: "web",
      link: "http://nguyenvanthien.herokuapp.com/",
      icon: "fa-solid fa-earth-asia",
    },
  ];

  const handleClickSocialLink = (link) => {
    window.open(link);
  };

  return (
    <Navbar fixed="bottom" className={styles.container}>
      <span className={styles.remark}>© 2022 design by: Nguyen Van Thien</span>
      <div className={styles.socials}>
        {socials.map((item) => (
          <span
            key={item.id}
            className={styles.socialsClient}
            onClick={() => handleClickSocialLink(item.link)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </span>
        ))}
      </div>
    </Navbar>
  );
};

export default Footer;
