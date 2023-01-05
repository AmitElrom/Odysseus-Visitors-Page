import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

import Contact from "../../main page/contact/contact/Contact";
import Paragraphs from "../paragraphs/paragraphs/Paragraphs";

import { sanityApiContext } from "../../../../store/sanity-api-context";

import { urlFor } from "../../../../client";

import Subtitle from "../../../UI/subtitle/Subtitle";

import classes from "./ArticlePage.module.css";

const ArticlePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [article, setArticle] = useState({
    title: "",
    paragraphs: [],
    image: "",
  });

  const { articleId } = useParams();

  const { articles } = useContext(sanityApiContext);

  useEffect(() => {
    const articleData = articles.find(
      (article) => article.id.toString() === articleId
    );
    console.log(articleData);
    setArticle((prevArticles) => {
      return {
        ...prevArticles,
        title: articleData?.mainTitle,
        paragraphs: articleData?.paragraphs,
        image: urlFor(articleData?.internalImage),
      };
    });
  }, [articleId, articles]);

  return (
    <div className={classes.article}>
      <img
        className={classes["img-header"]}
        src={article?.image}
        alt={`${article?.title} רקע תמונה`}
      />
      <div className={classes.data}>
        <Subtitle subtitle={article?.title} />
        <Paragraphs paragraphs={article?.paragraphs} />
      </div>
      <Contact />
    </div>
  );
};

export default ArticlePage;
