import React from "react";
import Articles from "../articles/articles/Articles";
import Values from "../values/values/Values";

import classes from "./ValuesAndArticles.module.css";

const ValuesAndArticles = () => {
  return (
    <div className={classes.page}>
      <Values />
      <Articles />
    </div>
  );
};

export default ValuesAndArticles;
