import React from "react";
import Subtitle from "../../../../../UI/subtitle/Subtitle";
import TheArticles from "../the articles/TheArticles";

import classes from "./Articles.module.css";

import techBgImg from "../../../../../../assets/values and articles/articles/tech-bg.png";
import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

const Articles = () => {
  const { isMobile } = useContext(screenSizeContext);
  const { articlesTitle } = useContext(sanityApiContext);

  return (
    <div className={classes.container}>
      <div className={`blocks ${classes.articles}`}>
        <Subtitle subtitle={articlesTitle} id="מאמרים" />
        <TheArticles />
      </div>
      <img
        className={!isMobile ? classes["tech-bg"] : classes["tech-bg-mobile"]}
        src={techBgImg}
        alt="tech bg"
      />
    </div>
  );
};

export default Articles;
