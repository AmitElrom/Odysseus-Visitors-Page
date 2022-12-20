import React from "react";
import Articles from "../articles/articles/Articles";
import Values from "../values/values/Values";

import classes from "./ValuesAndArticles.module.css";

const ValuesAndArticles = () => {
  return (
    <div className={classes.page}>
      {/* <div className={classes.bg1}> */}
      <Values />
      {/* </div> */}
      {/* <div className={classes.bg2}> */}
      <Articles />
      {/* </div> */}
      {/* <div className={classes.bg3}></div> */}
    </div>
  );
};

export default ValuesAndArticles;
