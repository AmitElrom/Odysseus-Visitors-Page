import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import ValueTitle from "../value title/ValueTitle";

import { urlFor } from "../../../../../../client";

import classes from "./Value.module.css";

const Value = ({ value }) => {
  const { isMobile } = useContext(screenSizeContext);

  return (
    <div
      className={`${classes.value} ${
        isMobile ? classes["value-mobile"] : undefined
      }`}
    >
      {isMobile ? (
        <div className={classes["triangle-mobile"]}>
          <img src={urlFor(value?.iconMobile)} alt={value?.title} />
          <h3>{value?.title}</h3>
        </div>
      ) : (
        <img
          className={classes.triangle}
          src={urlFor(value?.icon)}
          alt={value?.title}
        />
      )}

      <div className={classes.data}>
        {!isMobile && <ValueTitle title={value?.title} />}
        <div>
          <p>{value?.paragraph}</p>
          {value?.paragraph2 && <p>{value?.paragraph2}</p>}
        </div>
      </div>
    </div>
  );
};

export default Value;
