import { useContext } from "react";
import { useNavigate } from "react-router";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import classes from "./Article.module.css";

const Article = ({ article }) => {
  const navigate = useNavigate();

  console.log(article);

  const { isMobile } = useContext(screenSizeContext);

  const navigateToArticleHandler = () => {
    navigate(`/articles/${article?.id}`);
  };

  return (
    <div className={!isMobile ? classes.article : classes["article-mobile"]}>
      <div className={classes["img-div"]}>
        <img
          className={classes.img}
          src={`${process.env.REACT_APP_STRAPI_API_UPLOAD_URL}${article?.attributes?.image?.data?.attributes?.url}`}
          alt={`${process.env.REACT_APP_STRAPI_API_UPLOAD_URL}${article?.attributes?.IconMobile?.data?.attributes?.alternativeText}`}
        />
      </div>
      <div className={!isMobile ? classes.data : classes["data-mobile"]}>
        <h3>
          <span className={classes.span}>
            {article?.attributes?.titleInArticles}
          </span>
          {article.attributes.title2InArticles && (
            <span className={classes.span}>
              {article.attributes.title2InArticles}
            </span>
          )}
        </h3>
        <p
          style={
            article.attributes.title2InArticles
              ? { WebkitLineClamp: 4 }
              : { WebkitLineClamp: 5 }
          }
        >
          {article?.attributes?.textInArticles}
        </p>
        <div className={classes["button-read-more-div"]}>
          <button onClick={navigateToArticleHandler}>קראו עוד</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
