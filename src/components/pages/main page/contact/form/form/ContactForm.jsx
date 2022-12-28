import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          "https://formsubmit.co/ajax/474feefff46a09c80d6c8f99e2707d75",
          {
            name: values.name,
            email: values.email,
            topic: values.topic,
            message: values.message || `${values.name} לא צירף הודעה`,
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
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
