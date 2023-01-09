import React from "react";
import { useContext } from "react";

import { screenSizeContext } from "../../../store/screen-size-context";

const NewTabLink = ({ href, className, children }) => {
  const { isNotPhoneOrTablet } = useContext(screenSizeContext);

  return (
    <a
      style={{ all: "unset" }}
      className={className}
      href={href}
      target={isNotPhoneOrTablet ? "_blank" : "_self"}
      rel={isNotPhoneOrTablet ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default NewTabLink;
