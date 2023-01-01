import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { sanityApiContext } from "../../../store/sanity-api-context";

import classes from "./Message.module.css";

const Success = ({ isError }) => {
  const { message } = useContext(sanityApiContext);

  const [text, setText] = useState("");

  useEffect(() => {
    let msg = "";
    if (isError) {
      msg = message.find((msg) => msg.isError);
    } else {
      msg = message.find((msg) => !msg.isError);
    }
    setText(msg.message);
  }, [message, isError]);

  return (
    <div
      className={`${classes.modal} ${
        isError ? classes.error : classes.success
      }`}
    >
      {text}
    </div>
  );
};

export default Success;
