import React from "react";

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
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
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

      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;
