import React from "react";

import Paragraph from "../paragraph/Paragraph";

import classes from "./Paragraphs.module.css";

const Paragraphs = ({ paragraphs }) => {
  const paragraphsList = paragraphs?.map((paragraph) => {
    return <Paragraph key={paragraph._key} {...paragraph} />;
  });

  return <div className={classes.paragraphs}>{paragraphsList}</div>;
};

export default Paragraphs;
