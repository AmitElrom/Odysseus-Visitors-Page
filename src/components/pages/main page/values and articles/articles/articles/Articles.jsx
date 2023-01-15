import React, { useContext } from "react";
import Subtitle from "../../../../../UI/subtitle/Subtitle";
import TheArticles from "../the articles/TheArticles";

import { screenSizeContext } from "../../../../../../store/screen-size-context";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

import classes from "./Articles.module.css";

import techBgImg from "../../../../../../assets/values and articles/articles/tech-bg.png";

const Articles = () => {
  const { isMobile } = useContext(screenSizeContext);
  const { articlesTitle, ltr } = useContext(sanityApiContext);

  return (
    <div className={classes.container}>
      <div className={`blocks ${classes.articles}`}>
        <Subtitle subtitle={articlesTitle} id={articlesTitle} />
        <TheArticles />
      </div>
      {!ltr && (
        <img
          className={!isMobile ? classes["tech-bg"] : classes["tech-bg-mobile"]}
          src={techBgImg}
          alt="tech bg"
        />
      )}
    </div>
  );
};

export default Articles;
