import { useContext } from "react";

import classes from "./TheArticles.module.css";

import Article from "../article/Article";
import { strapiApiContext } from "../../../../../../store/strapi-api-context";

const TheArticles = () => {
  const { articles } = useContext(strapiApiContext);

  console.log(articles);

  const articlesList = articles.map((article) => {
    return <Article key={article.id} article={article} />;
  });

  return <div className={classes.articles}>{articlesList}</div>;
};

export default TheArticles;
