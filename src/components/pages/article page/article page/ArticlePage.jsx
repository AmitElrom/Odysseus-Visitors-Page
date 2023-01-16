import { useContext, useState, useEffect, Suspense } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";

import Contact from "../../main page/contact/contact/Contact";
import Paragraphs from "../paragraphs/paragraphs/Paragraphs";
import Subtitle from "../../../UI/subtitle/Subtitle";

import { sanityApiContext } from "../../../../store/sanity-api-context";

import { urlFor } from "../../../../client";

import classes from "./ArticlePage.module.css";

const ArticlePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [article, setArticle] = useState({
    title: "",
    paragraphs: [],
    internalImage: "",
    internalImageCompressed: "",
  });

  const { articleId } = useParams();

  const { articles, ltr } = useContext(sanityApiContext);

  useEffect(() => {
    const articleData = articles?.find(
      (article) => article.id.toString() === articleId
    );

    setArticle((prevArticles) => {
      return {
        ...prevArticles,
        title: articleData?.mainTitle,
        paragraphs: articleData?.paragraphs,
        internalImage: articleData?.internalImage,
        internalImageCompressed: articleData?.internalImageCompressed,
      };
    });
  }, [articleId, articles]);

  return (
    <div className={classes.article}>
      <Suspense fallback={<ClipLoader />}>
        <LazyLoadImage
          className={`${classes["img-header"]} ${
            ltr ? classes["img-header-ltr"] : undefined
          }`}
          src={article?.internalImage && urlFor(article.internalImage)}
          alt={`${article?.title} רקע תמונה`}
          placeholderSrc={
            article?.internalImageCompressed &&
            urlFor(article.internalImageCompressed)
          }
          effect="blur"
        />
      </Suspense>
      <div className={classes.data}>
        <Subtitle subtitle={article?.title} />
        <Paragraphs paragraphs={article?.paragraphs} />
      </div>
      <Contact />
    </div>
  );
};

export default ArticlePage;
