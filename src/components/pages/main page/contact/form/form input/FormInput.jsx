import React, { Fragment } from "react";

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
          <p className={classes["chars-counter"]} style={{ textAlign: "left" }}>
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
