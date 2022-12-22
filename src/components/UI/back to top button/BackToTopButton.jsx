import React, { Fragment, useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

import classes from "./BackToTopButton.module.css";

const BackToTopButton = () => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsBtnShown(true);
      } else {
        setIsBtnShown(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {isBtnShown && (
        <IoMdArrowRoundUp
          size={25}
          className={classes.button}
          onClick={scrollToTop}
        />
      )}
    </Fragment>
  );
};

export default BackToTopButton;
