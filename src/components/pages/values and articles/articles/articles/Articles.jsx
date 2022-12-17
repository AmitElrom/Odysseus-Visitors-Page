import React from "react";
import Subtitle from "../../../../UI/subtitle/Subtitle";
import TheArticles from "../the articles/TheArticles";

import classes from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={classes.articles}>
      <Subtitle subtitle="מאמרים" id="מאמרים" />
      <TheArticles />
    </div>
  );
};

export default Articles;
