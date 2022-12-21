import { useState, useEffect } from "react";

import ValueTitle from "../value title/ValueTitle";

import classes from "./Value.module.css";

const Value = ({ title, text1, text2, Icon, IconMobile }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 429);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 429);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={classes.value}>
      {isMobile ? <IconMobile /> : <Icon className={classes.triangle} />}
      <div className={classes.data}>
        {!isMobile && <ValueTitle title={title} />}
        <div>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Value;
