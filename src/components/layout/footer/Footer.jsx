import React, { useContext } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { screenSizeContext } from "../../../store/screen-size-context";

import LegalText from "./legal text/LegalText";
import NewTabLink from "../../UI/new tab link/NewTabLink";

import classes from "./Footer.module.css";
import Rights from "./rights/Rights";

const Footer = () => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <footer className={classes.footer}>
      <Rights />
      <LegalText />
      <h2 dir="rtl">
        <NewTabLink
          href="https://www.linkedin.com/in/amit-elrom/"
          rel="noreferrer"
          target="_blank"
        >
          <span>
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
          </span>
        </NewTabLink>
      </h2>
    </footer>
  );
};

export default Footer;
