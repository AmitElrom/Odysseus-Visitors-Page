import { useContext } from "react";
import { strapiApiContext } from "../../../../../../store/strapi-api-context";

import Value from "../value/Value";

import classes from "./TheValues.module.css";

const TheValues = () => {
  const { values } = useContext(strapiApiContext);

  const valuesList = values.map((value) => {
    return <Value key={value.id} value={value} />;
  });

  return <div className={classes.values}>{valuesList}</div>;
};

export default TheValues;
