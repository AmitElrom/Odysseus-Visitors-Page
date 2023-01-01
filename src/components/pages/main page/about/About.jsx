import { useContext } from "react";
import { sanityApiContext } from "../../../../store/sanity-api-context";
import Subtitle from "../../../UI/subtitle/Subtitle";

import classes from "./About.module.css";

const About = () => {
  const { about } = useContext(sanityApiContext);

  const aboutParagraphsList = about?.paragraphs?.map((par) => {
    return <p key={par._key}>{par?.paragraph}</p>;
  });

  return (
    <div className={classes.about}>
      <Subtitle subtitle={about?.title} id="אודות" />
      <div className={classes.text}>{aboutParagraphsList}</div>
    </div>
  );
};

export default About;
