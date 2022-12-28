import React, { Fragment } from "react";

import TitleDecoration from "../title decoration/TitleDecoration";

import classes from "./Subtitle.module.css";

const Subtitle = ({ subtitle, className, id }) => {
  return (
    <Fragment>
      <h2 id={id} className={`${classes.subtitle} ${className}`}>
        {subtitle}
      </h2>
      <TitleDecoration className={classes.underline} />
    </Fragment>
  );
};

export default Subtitle;
