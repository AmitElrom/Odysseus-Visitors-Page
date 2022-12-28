import { useContext } from "react";
import { screenSizeContext } from "../../../../../../store/screen-size-context";

import ValueTitle from "../value title/ValueTitle";

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
          <img
            src={`${process.env.REACT_APP_STRAPI_API_UPLOAD_URL}${value?.attributes?.IconMobile?.data?.attributes?.url}`}
            alt={value.attributes.IconMobile.data.attributes.hash}
          />
          <h3>{value?.attributes?.title}</h3>
        </div>
      ) : (
        <img
          className={classes.triangle}
          src={`${process.env.REACT_APP_STRAPI_API_UPLOAD_URL}${value?.attributes?.Icon?.data?.attributes?.url}`}
          alt={value.attributes.Icon.data.attributes.hash}
        />
      )}

      <div className={classes.data}>
        {!isMobile && <ValueTitle title={value?.attributes?.title} />}
        <div>
          <p>{value.attributes.paragraph}</p>
          {value.attributes.paragraph2 && <p>{value.attributes.paragraph2}</p>}
        </div>
      </div>
    </div>
  );
};

export default Value;
