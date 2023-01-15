import { Fragment, useContext } from "react";
import { menuContext } from "../../../../store/menu-context";
import { screenSizeContext } from "../../../../store/screen-size-context";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

import { sanityApiContext } from "../../../../store/sanity-api-context";
import { urlFor } from "../../../../client";

const Data = () => {
  const { toggleMenu } = useContext(menuContext);
  const { isMobile } = useContext(screenSizeContext);
  const { flag, lng, changeLanguageHandler, ltr } =
    useContext(sanityApiContext);

  return (
    <div
      className={`${classes.data} ${isMobile ? classes["data-mobile"] : undefined
        }`}
    >
      {!isMobile ? (
        <Fragment>
          <Logo />
          {!isMobile ? <Menu /> : <ToggleButton onClick={toggleMenu} />}
          <div
            className={`${!ltr ? classes["item-left"] : classes["item-right"]
              } ${classes["flag-wrapper"]} ${!isMobile ? classes["flag-wrapper-nonmobile"] : undefined
              }`}
          >
            <img
              onClick={changeLanguageHandler}
              src={flag && urlFor(flag)}
              alt={`${lng} flag icon`}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <ToggleButton onClick={toggleMenu} />
          <Logo className={classes.flag} />
          <div className={classes["flag-wrapper"]}>
            <img
              onClick={changeLanguageHandler}
              src={flag && urlFor(flag)}
              alt={`${lng} flag icon`}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Data;
