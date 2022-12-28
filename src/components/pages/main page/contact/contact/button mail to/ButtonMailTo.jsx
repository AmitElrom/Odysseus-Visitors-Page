import React from "react";

import classes from "./ButtonMailTo.module.css";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <a
      href="/#"
      className={classes.a}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </a>
  );
};

export default ButtonMailto;
