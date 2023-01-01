import { useContext } from "react";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

import Value from "../value/Value";

import classes from "./TheValues.module.css";

const TheValues = () => {
  const { values } = useContext(sanityApiContext);

  const valuesList = values.map((value) => {
    return <Value key={value._id} value={value} />;
  });

  return <div className={classes.values}>{valuesList}</div>;
};

export default TheValues;
