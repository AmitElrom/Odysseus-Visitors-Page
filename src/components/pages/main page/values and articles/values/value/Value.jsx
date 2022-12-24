import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import ValueTitle from "../value title/ValueTitle";

import classes from "./Value.module.css";

const Value = ({
  title,
  text1,
  text2,
  Icon,
  IconMobile,
  paragraph,
  paragraph2,
}) => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <div
      className={`${classes.value} ${
        isMobile ? classes["value-mobile"] : undefined
      }`}
    >
      {isMobile ? (
        <div className={classes["triangle-mobile"]}>
          <IconMobile />
          <h3>{title}</h3>
        </div>
      ) : (
        <Icon className={classes.triangle} />
      )}

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
