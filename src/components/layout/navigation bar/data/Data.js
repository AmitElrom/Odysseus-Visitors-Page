import { useState, useEffect } from "react";

import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";
import ToggleButton from "../toggle button/ToggleButton";

import classes from "./Data.module.css";

const Data = ({ onToggleMenu, isMenuOpen }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 428);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 428);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={classes.data}>
      {!isMobile ? <Menu /> : <ToggleButton onClick={onToggleMenu} isMenuOpen={isMenuOpen} />}
      <Logo />
    </div>
  );
};

export default Data;
