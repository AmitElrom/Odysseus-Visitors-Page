import React from "react";
import { useContext } from "react";
import { sanityApiContext } from "../../../store/sanity-api-context";

import classes from "./Message.module.css";

const Success = ({ isError }) => {
  const { successMessage, errorMessage } = useContext(sanityApiContext);

  return (
    <div
      className={`${classes.modal} ${
        isError ? classes.error : classes.success
      }`}
    >
      {!isError ? successMessage : errorMessage}
    </div>
  );
};

export default Success;
