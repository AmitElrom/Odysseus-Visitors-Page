import React, { Fragment } from "react";

import TitleDecoration from "../title decoration/TitleDecoration";

const Subtitle = ({ subtitle }) => {
  return (
    <Fragment>
      <h2 className="subtitle">{subtitle}</h2>
      <TitleDecoration />
    </Fragment>
  );
};

export default Subtitle;
