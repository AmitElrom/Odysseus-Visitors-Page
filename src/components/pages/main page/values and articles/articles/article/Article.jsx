import React from "react";
import { useNavigate } from "react-router";

import classes from "./Article.module.css";

const Article = ({ img, alt, title, title2, text }) => {
  const navigate = useNavigate();

  const navigateToArticleHandler = () => {
    navigate(`/articles/${title}${title2 ? title2 : ""}`);
  };

  return (
    <div className={classes.article}>
      <div className={classes["img-div"]}>
        <img className={classes.img} src={img} alt={alt} />
      </div>
      <div className={classes.data}>
        <h3>
          <span className={classes.span}>{title}</span>
          {title2 && <span className={classes.span}>{title2}</span>}
        </h3>
        <p style={title2 ? { WebkitLineClamp: 5 } : { WebkitLineClamp: 6 }}>
          {text}
        </p>
        <div className={classes["button-read-more-div"]}>
          <button onClick={navigateToArticleHandler}>קראו עוד</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
