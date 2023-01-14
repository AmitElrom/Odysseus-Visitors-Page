import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import classes from "./Main.module.css";

import treesImg from "../../../../assets/main/trees.png";
import treesMinImg from "../../../../assets/main/trees-min.png";
import { ClipLoader } from "react-spinners";
import { useContext } from "react";
import { sanityApiContext } from "../../../../store/sanity-api-context";

const Main = () => {
  const { title, subtitle, menu, ltr } = useContext(sanityApiContext);

  return (
    <div id={menu && menu[0]} className={classes.main}>
      <Suspense fallback={<ClipLoader />}>
        <LazyLoadImage
          className={`${classes.img} ${ltr ? classes["img-ltr"] : undefined}`}
          src={treesImg}
          alt="רקע עצים לגותרת של שם החברה קרן אודיסאוס"
          placeholderSrc={treesMinImg}
          effect="blur"
        />
      </Suspense>
      <h1 className={ltr ? classes["h1-ltr"] : undefined}>
        <div className={classes.title1}>{title}</div>
        <div className={classes.title2}>{subtitle}</div>
      </h1>
    </div>
  );
};

export default Main;
