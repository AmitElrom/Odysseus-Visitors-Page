import { useState, useEffect, useContext } from "react";
import { menuContext } from "../../../../store/menu-context";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

const Data = () => {

  const { toggleMenu } = useContext(menuContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 560);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 560);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={classes.data}>
      {!isMobile ? <Menu /> : <ToggleButton onClick={toggleMenu} />}
      <Logo />
    </div>
  );
};

export default Data;
