import React from "react";
import { useContext } from "react";
import { sanityApiContext } from "../../../../store/sanity-api-context";

const Rights = () => {
  const { rights } = useContext(sanityApiContext);

  return <p style={{ textAlign: "center", color: "var(--blue)" }}>{rights}</p>;
};

export default Rights;
