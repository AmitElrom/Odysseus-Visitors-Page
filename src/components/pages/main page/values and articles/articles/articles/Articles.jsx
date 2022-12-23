import React from "react";
import Subtitle from "../../../../../UI/subtitle/Subtitle";
import TheArticles from "../the articles/TheArticles";

import classes from "./Articles.module.css";

import techBgImg from "../../../../../../assets/values and articles/articles/tech-bg.png";

const Articles = () => {
  return (
    <div className={classes.container}>
      <div className={`blocks ${classes.articles}`}>
        <Subtitle subtitle="מאמרים" id="מאמרים" />
        <TheArticles />
      </div>
      <img className={classes["tech-bg"]} src={techBgImg} alt="tech bg" />
    </div>
  );
};

export default Articles;
