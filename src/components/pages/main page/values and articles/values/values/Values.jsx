import React from "react";
import Subtitle from "../../../../../UI/subtitle/Subtitle";
import TheValues from "../the values/TheValues";

import classes from "./Values.module.css";

import techBgImg from "../../../../../../assets/values and articles/values/tech-bg.png";

const Values = () => {
  return (
    <div className={classes.container}>
      <div className={`blocks ${classes.values}`}>
        <Subtitle subtitle="ערכי הקרן" id="ערכי הקרן" />
        <TheValues />
      </div>
      <img className={classes["tech-bg"]} src={techBgImg} alt="tech bg" />
    </div>
  );
};

export default Values;
