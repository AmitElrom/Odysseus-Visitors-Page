import React from "react";

import TitleDecoration from "../../../../UI/title decoration/TitleDecoration";

import classes from "./ValueTitle.module.css";

const ValueTitle = ({ title }) => {
  return (
    <div>
      <h3 className={classes.title}>{title}</h3>
      <TitleDecoration className={classes.underline} aspectRatio={"134.33/2"} />
    </div>
  );
};

export default ValueTitle;
