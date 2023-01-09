import React, { useContext } from "react";
import NewTabLink from "../../UI/new tab link/NewTabLink";
import { IoLogoLinkedin } from "react-icons/io";

import classes from "./Footer.module.css";

import { screenSizeContext } from "../../../store/screen-size-context";

const Footer = () => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <footer className={classes.footer}>
      <h2>
        <NewTabLink
          href="https://www.linkedin.com/in/amit-elrom/"
          rel="noreferrer"
          target="_blank"
        >
          <span
            className={
              !isMobile
                ? classes["developer-name"]
                : classes["developer-name-mobile"]
            }
          >
            Amit Elrom - Web Development
          </span>
          <span className={classes["linkedin-icon"]}>
            <IoLogoLinkedin />
          </span>
        </NewTabLink>
      </h2>
    </footer>
  );
};

export default Footer;
