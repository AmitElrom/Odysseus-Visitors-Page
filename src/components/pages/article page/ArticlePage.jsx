import React from "react";
import { useParams } from "react-router";

import classes from "./ArticlePage.module.css";

const ArticlePage = () => {
  const { articleId } = useParams();
  return (
    <div className={classes.article}>
      <h1>כותרת</h1>
    </div>
  );
};

export default ArticlePage;
