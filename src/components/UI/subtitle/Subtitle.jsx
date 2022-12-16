import React, { Fragment } from "react";

import TitleDecoration from "../title decoration/TitleDecoration";

import classes from "./Subtitle.module.css";

const Subtitle = ({ subtitle }) => {
  return (
    <Fragment>
      <h2 className="subtitle">{subtitle}</h2>
      <TitleDecoration className={classes.underline} />
    </Fragment>
  );
};

export default Subtitle;
