import React from "react";

import classes from "./Footer.module.css";

import { IoLogoLinkedin } from "react-icons/io";
import { useContext } from "react";
import { screenSizeContext } from "../../../store/screen-size-context";

const Footer = () => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <footer className={classes.footer}>
      <h2>
        <span>
          <a
            href="https://www.linkedin.com/in/amit-elrom/"
            target="_blank"
            className={
              !isMobile
                ? classes["developer-name"]
                : classes["developer-name-mobile"]
            }
            rel="noreferrer"
          >
            Amit Elrom - Web Development
          </a>
          <span className={classes["linkedin-icon"]}>
            <IoLogoLinkedin />
          </span>
        </span>
      </h2>
    </footer>
  );
};

export default Footer;
