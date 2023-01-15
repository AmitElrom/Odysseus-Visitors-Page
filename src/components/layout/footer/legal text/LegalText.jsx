import React, { useContext } from "react";
import { sanityApiContext } from "../../../../store/sanity-api-context";

import classes from "./LegalText.module.css";

const LegalText = () => {
  const { legalText } = useContext(sanityApiContext);

  return <p className={classes["legal-text"]}>{legalText}</p>;
};

export default LegalText;
