import React from "react";

import classes from "./TitleDecoration.module.css";

const TitleDecoration = ({
  height,
  width,
  aspectRatio = "20/1",
  className,
}) => {
  return (
    <div
      className={`${className} ${classes["ui-piece"]}`}
      style={{ height, aspectRatio, width }}
    ></div>
  );
};

export default TitleDecoration;
