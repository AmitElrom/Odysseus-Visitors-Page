import React, { Fragment } from "react";

import TitleDecoration from "../title decoration/TitleDecoration";

import classes from "./Subtitle.module.css";

const Subtitle = ({ subtitle, className }) => {
  return (
    <Fragment>
      <h2 className={`subtitle ${className}`}>{subtitle}</h2>
      <TitleDecoration className={classes.underline} />
    </Fragment>
  );
};

export default Subtitle;
