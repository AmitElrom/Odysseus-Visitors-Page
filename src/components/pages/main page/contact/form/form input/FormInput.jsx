import React, { Fragment, useContext } from "react";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

import classes from "./FormInput.module.css";

const FormInput = ({ placeholder, className, name, type, value, onChange }) => {
  const { ltr } = useContext(sanityApiContext);

  return (
    <div className={`${classes["form-input"]} ${className}`}>
      <label
        className={classes.label}
        style={ltr ? { textAlign: "left" } : { textAlign: "right" }}
        htmlFor={placeholder}
      >
        {placeholder}{" "}
        {name !== "message" && <span className={classes.asterisk}> *</span>}
      </label>
      {name === "message" ? (
        <Fragment>
          <textarea
            id={placeholder}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
          <p
            className={classes["chars-counter"]}
            style={ltr ? { textAlign: "right" } : { textAlign: "left" }}
          >
            {value.length}/600
          </p>
        </Fragment>
      ) : (
        <input
          id={placeholder}
          className={classes.input}
          type={type && type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required={name !== "message"}
        />
      )}
    </div>
  );
};

export default FormInput;
