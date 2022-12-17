import React from "react";
import Subtitle from "../../../UI/subtitle/Subtitle";

import classes from "./Contact.module.css";

import backgroundTechImg from "../../../../assets/contact/background.png";
import ContactForm from "../form/form/ContactForm";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <img
        className={classes.img}
        src={backgroundTechImg}
        alt="contact blue tech background"
      />
      <div className={classes.data}>
        <Subtitle subtitle="יצירת קשר" className={classes.headline} />
        <ContactForm />
        <div className={classes["contact-details"]}>
          <span>ליאור - </span>
          <span>lior@odysseus-hedgefunds.com</span>
          <span className={classes["contact-details-slash"]}>/</span>
          <span>052-2803699</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
