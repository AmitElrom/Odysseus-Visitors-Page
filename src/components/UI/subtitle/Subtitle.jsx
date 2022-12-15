import React, { Fragment } from "react";

import TitleDecoration from "../title decoration/TitleDecoration";

const Subtitle = ({ subtitle }) => {
  return (
    <Fragment>
      <h1 className="subtitle">{subtitle}</h1>
      <TitleDecoration />
    </Fragment>
  );
};

export default Subtitle;
