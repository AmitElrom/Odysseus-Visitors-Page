import React, { Fragment } from "react";
import { IoLogoLinkedin } from "react-icons/io";

import { screenSizeContext } from "../../../../../store/screen-size-context";

import ContactForm from "../form/form/ContactForm";
import Subtitle from "../../../../UI/subtitle/Subtitle";
import ButtonMailto from "./button mail to/ButtonMailTo";

import classes from "./Contact.module.css";

import { useContext } from "react";

const Contact = () => {
  const { isMobile, width } = useContext(screenSizeContext);

  const toLinkedinProfile = () => {
    window.location.href =
      "https://www.linkedin.com/company/odysseus-hedge-fund/";
  };

  return (
    <div className={`${classes.contact}`}>
      <div className={classes.data}>
        <Subtitle
          subtitle="יצירת קשר"
          id="יצירת קשר"
          className={classes.headline}
        />
        <ContactForm />
        <div className={classes["contact-details"]}>
          <span>ליאור - </span>
          <span className={classes["contact-details-email"]}>
            <ButtonMailto
              mailto="mailto:lior@odysseus-hedgefunds.com"
              label="lior@odysseus-hedgefunds.com"
            />
          </span>
          <span className={classes["contact-details-slash"]}>/</span>
          <span className={classes["contact-details-phone"]}>
            <a
              className={
                isMobile ? classes["contact-details-phone-mobile"] : undefined
              }
              href={isMobile ? "tel:0522803699" : undefined}
            >
              052-2803699
            </a>
          </span>
          {width > 500 ? (
            <Fragment>
              <span className={classes["contact-details-slash"]}>/</span>
              <span className={classes["linkedin-icon-parent"]}>
                <IoLogoLinkedin
                  size={30}
                  onClick={toLinkedinProfile}
                  className={classes["linkedin-icon"]}
                />
              </span>
            </Fragment>
          ) : (
            <div>
              <IoLogoLinkedin
                color="white"
                size={30}
                onClick={toLinkedinProfile}
                className={classes["linkedin-icon-mobile"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
