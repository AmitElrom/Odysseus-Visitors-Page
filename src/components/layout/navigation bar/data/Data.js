import { useContext } from "react";
import { menuContext } from "../../../../store/menu-context";
import { screenSizeContext } from "../../../../store/screen-size-context";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

const Data = () => {

  const { toggleMenu } = useContext(menuContext);
  const { isMobile } = useContext(screenSizeContext);

  return (
    <div className={classes.data}>
      {!isMobile ? <Menu /> : <ToggleButton onClick={toggleMenu} />}
      <Logo />
    </div>
  );
};

export default Data;
