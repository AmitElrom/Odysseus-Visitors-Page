import React from "react";
import Subtitle from "../../../../UI/subtitle/Subtitle";
import TheValues from "../the values/TheValues";

import classes from "./Values.module.css";

const Values = () => {
  return (
    <div className={classes.values}>
      <Subtitle subtitle="ערכי הקרן" />
      <TheValues />
    </div>
  );
};

export default Values;
