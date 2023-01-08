import { useContext } from "react";
import { menuContext } from "../../../../store/menu-context";
import { screenSizeContext } from "../../../../store/screen-size-context";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

import { ReactComponent as IsraelFlagIcon } from "../../../../assets/navigation bar/flags/israel_flag.svg";
import { ReactComponent as UkFlagIcon } from "../../../../assets/navigation bar/flags/great_britain_flag.svg";

const Data = () => {
  const { toggleMenu } = useContext(menuContext);
  const { isMobile } = useContext(screenSizeContext);

  return (
    <div className={classes.data}>
      <Logo />
      {!isMobile ? <Menu /> : <ToggleButton onClick={toggleMenu} />}
      <IsraelFlagIcon width={30} />
    </div>
  );
};

export default Data;
