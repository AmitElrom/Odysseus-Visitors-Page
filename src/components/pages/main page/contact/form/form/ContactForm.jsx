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
      // Set the API endpoint and the access token
      const endpoint = "https://graph.microsoft.com/v1.0/me/sendmail";
      const access_token = "<your access token>";

      // Set the headers for the request
      const headers = {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
      };

      // Set the request body
      const data = {
        message: {
          subject: "Hello from React",
          body: {
            contentType: "Text",
            content: "This is a test email from a React app.",
          },
          toRecipients: [
            {
              emailAddress: {
                address: "test@outlook.com",
              },
            },
          ],
        },
        saveToSentItems: "true",
      };

      // Make the API request
      axios
        .post(endpoint, data, { headers: headers })
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });
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
