import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { strapiApiContext } from "../../../../store/strapi-api-context";
import Paragraphs from "../paragraphs/paragraphs/Paragraphs";

import classes from "./ArticlePage.module.css";

const ArticlePage = () => {
  const [article, setArticle] = useState({
    title: "",
    paragraphs: [],
  });

  const { articleId } = useParams();

  const { articles } = useContext(strapiApiContext);

  useEffect(() => {
    const articleData = articles.find(
      (article) => article.id.toString() === articleId
    );
    setArticle((prevArticles) => {
      return {
        ...prevArticles,
        title: articleData?.attributes?.mainTitle,
        paragraphs: articleData?.attributes?.paragraphs?.data,
      };
    });
  }, [articleId, articles]);

  return (
    <div className={classes.article}>
      <h1>{article.title}</h1>
      <Paragraphs paragraphs={article.paragraphs} />
    </div>
  );
};

export default ArticlePage;
