import React from "react";
import { useContext } from "react";
import { strapiApiContext } from "../../../../store/strapi-api-context";
import Subtitle from "../../../UI/subtitle/Subtitle";

import classes from "./About.module.css";

const About = () => {
  const { aboutParagraphs } = useContext(strapiApiContext);

  console.log("aboutParagraphs", aboutParagraphs);

  const aboutParagraphsList = aboutParagraphs?.map((par) => {
    return <p key={par.id}>{par?.attributes?.paragraph}</p>;
  });

  return (
    <div className={classes.about}>
      <Subtitle subtitle="אודותינו" id="אודות" />
      <div className={classes.text}>{aboutParagraphsList}</div>
    </div>
  );
};

export default About;
