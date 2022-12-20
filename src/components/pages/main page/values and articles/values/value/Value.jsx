import React from "react";

import ValueTitle from "../value title/ValueTitle";

import classes from "./Value.module.css";

import { ReactComponent as ValueBlueTriangle } from "../../../../../../assets/values and articles/values/value blue triangle.svg";

const Value = ({ title, text1, text2, icon }) => {
  return (
    <div className={classes.value}>
      <ValueBlueTriangle className={classes.triangle} />
      <div className={classes.data}>
        <ValueTitle title={title} />
        <div>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Value;
