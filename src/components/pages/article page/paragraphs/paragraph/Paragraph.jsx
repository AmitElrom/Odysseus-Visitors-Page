import React, { Fragment } from "react";

import classes from "./Paragraph.module.css";

const Paragraph = ({ title, text }) => {
  return (
    <Fragment>
      {title ? (
        <div className={classes.paragraph}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      ) : (
        <p className={classes.paragraph}>{text}</p>
      )}
    </Fragment>
  );
};

export default Paragraph;
