import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import ValueTitle from "../value title/ValueTitle";

import { urlFor } from "../../../../../../client";

import classes from "./Value.module.css";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

const Value = ({ value }) => {
  const { isMobile } = useContext(screenSizeContext);
  const { ltr } = useContext(sanityApiContext);

  return (
    <div
      className={`${`${classes.value} ${
        ltr ? classes["value-ltr"] : undefined
      }`} ${isMobile ? classes["value-mobile"] : undefined}`}
    >
      {isMobile ? (
        <div className={classes["triangle-mobile"]}>
          <img src={urlFor(value?.iconMobile)} alt={value?.title} />
          <h3>{value?.title}</h3>
        </div>
      ) : (
        <img
          className={`${classes.triangle} ${
            ltr ? classes["triangle-ltr"] : undefined
          }`}
          src={urlFor(value?.icon)}
          alt={value?.title}
        />
      )}
      <div>
        {!isMobile && <ValueTitle title={value?.title} />}
        <div className={classes.paragraphs}>
          <p>{value?.paragraph}</p>
          {value?.paragraph2 && <p>{value?.paragraph2}</p>}
        </div>
      </div>
    </div>
  );
};

export default Value;
