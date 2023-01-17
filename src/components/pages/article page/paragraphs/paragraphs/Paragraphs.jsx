import React from "react";
import { useContext } from "react";
import { sanityApiContext } from "../../../../../store/sanity-api-context";

import Paragraph from "../paragraph/Paragraph";

import classes from "./Paragraphs.module.css";

const Paragraphs = ({ paragraphs }) => {
  const { ltr } = useContext(sanityApiContext);

  const paragraphsList = paragraphs?.map((paragraph) => {
    return <Paragraph key={paragraph._key} {...paragraph} />;
  });

  return (
    <div
      className={classes.paragraphs}
      style={ltr ? { textAlign: "left" } : { textAlign: "right" }}
    >
      {paragraphsList}
    </div>
  );
};

export default Paragraphs;
