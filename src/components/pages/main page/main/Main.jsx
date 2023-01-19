import React, { Suspense, useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import { scroller } from "react-scroll";

import { urlFor } from "../../../../client";
import { sanityApiContext } from "../../../../store/sanity-api-context";

import treesImg from "../../../../assets/main/trees.png";
import treesMinImg from "../../../../assets/main/trees-min.png";

import classes from "./Main.module.css";

const Main = () => {
  const { title, subtitle, menu, ltr, mainImg, mainImgMin } =
    useContext(sanityApiContext);

  useEffect(() => {
    let scrollTo = sessionStorage.getItem("main-page-scroll-to");
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        spy: true,
        smooth: true,
        offset: 200,
        duration: 500,
      });
      setTimeout(() => {
        sessionStorage.removeItem("main-page-scroll-to");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem("main-page-scroll-to")]);

  return (
    <div id={menu && menu[0]} className={classes.main}>
      <Suspense fallback={<ClipLoader />}>
        <LazyLoadImage
          className={`${classes.img} ${ltr ? classes["img-ltr"] : undefined}`}
          src={mainImg ? urlFor(mainImg) : treesImg}
          alt="רקע עצים על כותרת של שם החברה קרן אודיסאוס"
          placeholderSrc={mainImgMin ? urlFor(mainImgMin) : treesMinImg}
          effect="blur"
        />
      </Suspense>
      <h1 className={ltr ? classes["h1-ltr"] : classes["h1-rtl"]}>
        <div className={classes.title1}>{title}</div>
        <div className={classes.title2}>{subtitle}</div>
      </h1>
    </div>
  );
};

export default Main;
