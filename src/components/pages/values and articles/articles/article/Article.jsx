import React from "react";

import classes from "./Article.module.css";

const Article = ({ img, alt, title, title2, text }) => {
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
        <p>{text}</p>
        <div className={classes["button-read-more-div"]}>
          <button>קראו עוד</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
