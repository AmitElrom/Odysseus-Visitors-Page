import React from "react";

import classes from "./FormInput.module.css";

const FormInput = ({
  placeholder,
  className,
  error,
  name,
  type,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`${classes["form-input"]} ${className}`}>
      {name === "message" ? (
        <textarea
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <input
          className={classes.input}
          type={type && type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;
