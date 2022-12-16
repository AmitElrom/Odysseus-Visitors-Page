import React from "react";

import TitleDecoration from "../../../../UI/title decoration/TitleDecoration";

import classes from "./ValueTitle.module.css";

const ValueTitle = ({ title }) => {
  return (
    <div>
      <h3 className={classes.title}>{title}</h3>
      <TitleDecoration width="60%" aspectRatio={"27/1"} />
    </div>
  );
};

export default ValueTitle;
