import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import { strapiApiContext } from "../../../../store/strapi-api-context";

import Contact from "../../main page/contact/contact/Contact";
import Paragraphs from "../paragraphs/paragraphs/Paragraphs";

import classes from "./ArticlePage.module.css";

import headerImg from "../../../../assets/article page/article_header.png";
import Subtitle from "../../../UI/subtitle/Subtitle";

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
      <img className={classes["img-header"]} src={headerImg} alt="header" />
      <div className={classes.data}>
        <Subtitle subtitle={article.title} />
        <Paragraphs paragraphs={article.paragraphs} />
      </div>
      <Contact />
    </div>
  );
};

export default ArticlePage;
