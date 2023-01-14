import { useContext } from "react";
import { useNavigate } from "react-router";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import { urlFor } from "../../../../../../client";

import classes from "./Article.module.css";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

const Article = ({ article }) => {
  const navigate = useNavigate();

  const { isMobile } = useContext(screenSizeContext);
  const { articleButton, ltr } = useContext(sanityApiContext);

  const navigateToArticleHandler = () => {
    navigate(`/articles/${article?.id}`);
  };

  return (
    <div
      className={
        !isMobile
          ? `${classes.article} ${ltr ? classes["article-ltr"] : undefined}`
          : classes["article-mobile"]
      }
    >
      <div className={classes["img-div"]}>
        <img
          className={classes.img}
          src={urlFor(article?.image)}
          alt={article?.titleInArticles}
        />
      </div>
      <div className={!isMobile ? classes.data : classes["data-mobile"]}>
        <h3>
          <span className={classes.span}>{article?.titleInArticles}</span>

          {article.title2InArticles && (
            <span className={classes.span}>{article.title2InArticles}</span>
          )}
        </h3>
        <p
          style={
            article?.title2InArticles
              ? { WebkitLineClamp: 4, padding: isMobile ? "0 1rem" : undefined }
              : { WebkitLineClamp: 5, padding: isMobile ? "0 1rem" : undefined }
          }
        >
          {article?.textInArticles}
        </p>
        <div className={classes["button-read-more-div"]}>
          <button onClick={navigateToArticleHandler}>{articleButton}</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
