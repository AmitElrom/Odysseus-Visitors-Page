import { useContext } from "react";

import classes from "./TheArticles.module.css";

import Article from "../article/Article";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

const TheArticles = () => {
  const { articles } = useContext(sanityApiContext);

  const articlesList = articles.map((article) => {
    return <Article key={article._id} article={article} />;
  });

  return <div className={classes.articles}>{articlesList}</div>;
};

export default TheArticles;
