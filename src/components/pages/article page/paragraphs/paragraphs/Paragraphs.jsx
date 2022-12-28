import React from "react";

import Paragraph from "../paragraph/Paragraph";

import classes from "./Paragraphs.module.css";

const Paragraphs = ({ paragraphs }) => {
  const paragraphsList = paragraphs?.map((paragraph) => {
    return <Paragraph key={paragraph.id} {...paragraph.attributes} />;
  });

  return <div className={classes.paragraphs}>{paragraphsList}</div>;
};

export default Paragraphs;
