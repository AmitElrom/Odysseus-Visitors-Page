import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

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
        <AiOutlineArrowUp className={classes.button} onClick={scrollToTop} />
      )}
    </Fragment>
  );
};

export default BackToTopButton;
