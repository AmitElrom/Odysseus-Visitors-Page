import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../form input/FormInput";

import classes from "./ContactForm.module.css";

const FORM_INPUTS = [
  {
    placeholder: "שם מלא",
    name: "name",
  },
  {
    placeholder: "נושא הפנייה",
    name: "topic",
  },
  {
    placeholder: "מייל",
    name: "email",
    type: "email",
  },
  {
    placeholder: "הודעה",
    name: "message",
  },
];

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      topic: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("שדה חובה"),
      topic: Yup.string().required("שדה חובה"),
      email: Yup.string().email("כתובת מייל לא תקינה").required("שדה חובה"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formInputsList = FORM_INPUTS.map((input) => {
    return (
      <FormInput
        key={input.name}
        {...input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched[input.name] && formik.errors[input.name]
            ? formik.errors[input.name]
            : null
        }
      />
    );
  });

  return (
    <div className={classes.div}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.inputs}>{formInputsList}</div>
        <div className={classes["button-div"]}>
          <button type="submit">שלח</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
