import React, { Fragment } from "react";
import { useContext } from "react";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

import classes from "./FormInput.module.css";

const FormInput = ({
  placeholder,
  className,
  error,
  name,
  type,
  value,
  onChange,
  onBlur,
}) => {
  const { ltr } = useContext(sanityApiContext);

  return (
    <div className={`${classes["form-input"]} ${className}`}>
      {name === "message" ? (
        <Fragment>
          <textarea
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
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
          className={`${classes.input} ${
            error ? classes["input-field-error"] : ""
          }`}
          type={type && type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default FormInput;
