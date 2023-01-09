import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import classes from "./Main.module.css";

import treesImg from "../../../../assets/main/trees.png";
import treesMinImg from "../../../../assets/main/trees-min.png";
import { ClipLoader } from "react-spinners";

const Main = () => {
  return (
    <div id="ראשי" className={classes.main}>
      <Suspense fallback={<ClipLoader />}>
        <LazyLoadImage
          src={treesImg}
          alt="רקע עצים לגותרת של שם החברה קרן אודיסאוס"
          placeholderSrc={treesMinImg}
          effect="blur"
        />
      </Suspense>
      <h1>
        <div className={classes.title1}>קרן אודיסאוס</div>
        <div className={classes.title2}>השקעה טכנולוגית</div>
      </h1>
    </div>
  );
};

export default Main;
