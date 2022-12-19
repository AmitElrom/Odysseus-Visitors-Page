import React from "react";

import classes from "./Footer.module.css";

import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h2>
        <span>
          <a
            href="https://www.linkedin.com/in/amit-elrom/"
            target="_blank"
            className={classes["developer-name"]}
            rel="noreferrer"
          >
            Amit Elrom
          </a>
          <span className={classes["linkedin-icon"]}>
            <IoLogoLinkedin />
          </span>
        </span>
      </h2>
    </div>
  );
};

export default Footer;
