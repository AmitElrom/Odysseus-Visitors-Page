import React, { Fragment, useContext } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import NewTabLink from "../../../../UI/new tab link/NewTabLink";

import { screenSizeContext } from "../../../../../store/screen-size-context";

import ContactForm from "../form/form/ContactForm";
import Subtitle from "../../../../UI/subtitle/Subtitle";
import ButtonMailto from "./button mail to/ButtonMailTo";

import classes from "./Contact.module.css";
import { sanityApiContext } from "../../../../../store/sanity-api-context";

const Contact = () => {
  const { isMobile, width } = useContext(screenSizeContext);
  const { contactForm } = useContext(sanityApiContext);

  return (
    <div className={`${classes.contact}`}>
      <div className={classes.data}>
        <Subtitle
          subtitle={contactForm?.title}
          id={contactForm?.title}
          className={classes.headline}
        />
        <ContactForm />
        <div className={classes["contact-details"]}>
          <span>{contactForm?.addressee} - </span>
          {/* <span>ליאור - </span> */}
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
              href={isMobile ? `tel:${contactForm?.phoneNumber}` : undefined}
            >
              {/* 052-2803699 */}
              {contactForm?.phoneNumberDisplayed}
            </a>
          </span>
          {width > 500 ? (
            <Fragment>
              <span className={classes["contact-details-slash"]}>/</span>
              <NewTabLink href="https://www.linkedin.com/company/odysseus-hedge-fund/">
                <IoLogoLinkedin
                  size={30}
                  className={classes["linkedin-icon"]}
                />
              </NewTabLink>
            </Fragment>
          ) : (
            <div>
              <NewTabLink href="https://www.linkedin.com/company/odysseus-hedge-fund/">
                <IoLogoLinkedin
                  size={30}
                  className={classes["linkedin-icon-mobile"]}
                />
              </NewTabLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
