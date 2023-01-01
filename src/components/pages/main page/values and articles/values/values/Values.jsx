import React from "react";
import Subtitle from "../../../../../UI/subtitle/Subtitle";
import TheValues from "../the values/TheValues";

import classes from "./Values.module.css";

import techBgImg from "../../../../../../assets/values and articles/values/tech-bg.png";
import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

const Values = () => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <div className={classes.container}>
      <div className={`${classes.values}`}>
        <Subtitle subtitle="ערכי הקרן" id="ערכי הקרן" />
        <TheValues />
      </div>
      <img
        className={!isMobile ? classes["tech-bg"] : classes["tech-bg-mobile"]}
        src={techBgImg}
        alt="tech bg"
      />
    </div>
  );
};

export default Values;
