import React from "react";

import classes from "./TheArticles.module.css";

import chooseInvestmentImg from "../../../../../assets/values and articles/articles/choose investment.png";
import mediaInfluenceImg from "../../../../../assets/values and articles/articles/media influence.png";
import futureImg from "../../../../../assets/values and articles/articles/future.png";
import bubbleImg from "../../../../../assets/values and articles/articles/bubble.png";
import smartOrGambleImg from "../../../../../assets/values and articles/articles/smart or gamble.png";
import interestImg from "../../../../../assets/values and articles/articles/interest.png";
import Article from "../article/Article";

const ARTICLES = [
  {
    title: "בחירת אפיק השקעה",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: chooseInvestmentImg,
    alt: "choose investment",
  },
  {
    title: "השפעת המדיה",
    title2: "החברתית על שוק ההון",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: mediaInfluenceImg,
    alt: "media influence",
  },
  {
    title: "העתיד של שוק ההון -",
    title2: "מסחר אלגוריתמי",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: futureImg,
    alt: "stock market future",
  },
  {
    title: "הבועה הכלכלית",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: bubbleImg,
    alt: "economic bubble",
  },
  {
    title: "שוק ההון -",
    title2: "השקעה נבונה או הימורים?",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: smartOrGambleImg,
    alt: "stock market future",
  },
  {
    title: "השפעות העלאת הריבית",
    text: "תכנון מכני באמצעות מחשב מאפשר למהנדסים לייצר עצובים למוצרים עתידיים, עם שרטוטים טכניים מפורטים ומדויקים (כולל מודלים דו-ממדיים ותלת ממדיים) וכן מפרטים להנדסה ולייצור. מדובר בשיטה .הטובה",
    img: interestImg,
    alt: "rising interest influence",
  },
];

const TheArticles = () => {
  const articlesList = ARTICLES.map((article) => {
    return <Article key={article.title} {...article} />;
  });

  return <div className={classes.articles}>{articlesList}</div>;
};

export default TheArticles;
