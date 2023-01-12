import { Fragment, useContext } from "react";
import { menuContext } from "../../../../store/menu-context";
import { screenSizeContext } from "../../../../store/screen-size-context";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

import { ReactComponent as IsraelFlagIcon } from "../../../../assets/navigation bar/flags/israel_flag.svg";
import { ReactComponent as UkFlagIcon } from "../../../../assets/navigation bar/flags/great_britain_flag.svg";
import { sanityApiContext } from "../../../../store/sanity-api-context";
import { urlFor } from "../../../../client";

const Data = () => {
  const { toggleMenu } = useContext(menuContext);
  const { isMobile } = useContext(screenSizeContext);
  const { flag, lng, changeLanguageHandler } = useContext(sanityApiContext);

  return (
    <div
      className={`${classes.data} ${
        isMobile ? classes["data-mobile"] : undefined
      }`}
    >
      {!isMobile ? (
        <Fragment>
          <Logo />
          {!isMobile ? <Menu /> : <ToggleButton onClick={toggleMenu} />}
          {/* {isHebrew ? (
            <IsraelFlagIcon
              // onClick={changeLanguageHandler}
              className={`${classes["item-left"]} ${classes.flag}`}
              width={30}
            />
          ) : (
            <UkFlagIcon
              // onClick={changeLanguageHandler}
              className={`${classes["item-left"]} ${classes.flag}`}
              width={30}
            />
          )} */}
        </Fragment>
      ) : (
        <Fragment>
          <ToggleButton onClick={toggleMenu} />
          <Logo className={classes.flag} />
          {/* {isHebrew ? (
            <IsraelFlagIcon
              onClick={changeLanguageHandler}
              className={classes.flag}
              width={30}
            />
          ) : (
            <UkFlagIcon
              onClick={changeLanguageHandler}
              className={classes.flag}
              width={30}
            />
          )} */}
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
