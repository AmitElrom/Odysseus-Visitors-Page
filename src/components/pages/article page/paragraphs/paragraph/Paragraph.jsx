import React, { Fragment } from "react";

import classes from "./Paragraph.module.css";

const Paragraph = ({ title, text }) => {
  return (
    <Fragment>
      {title ? (
        <div className={classes.paragraph}>
          <h2>{title}</h2>
          <p className={classes.p}>{text}</p>
        </div>
      ) : (
        <p className={`${classes.paragraph} ${classes.p}`}>{text}</p>
      )}
    </Fragment>
  );
};

export default Paragraph;
