import React from "react";

import classes from "./Main.module.css";

import treesImg from "../../../../assets/main/trees.png";

const Main = () => {
  return (
    <div id="ראשי" className={classes.main}>
      <img src={treesImg} alt="trees" />
      <h1>
        <div className={classes.title1}>קרן אודיסאוס</div>
        <div className={classes.title2}>השקעה טכנולוגית</div>
      </h1>
    </div>
  );
};

export default Main;
