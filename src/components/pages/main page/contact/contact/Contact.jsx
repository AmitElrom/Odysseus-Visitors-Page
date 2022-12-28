import React from "react";
import Subtitle from "../../../../UI/subtitle/Subtitle";

import classes from "./Contact.module.css";

import ContactForm from "../form/form/ContactForm";
import ButtonMailto from "./button mail to/ButtonMailTo";
import { useContext } from "react";
import { screenSizeContext } from "../../../../../store/screen-size-context";

const Contact = () => {
  const { isMobile } = useContext(screenSizeContext);

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
