import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import FormInput from "../form input/FormInput";
import Message from "../../../../../UI/message/Message";

import classes from "./ContactForm.module.css";

import { client } from "../../../../../../client";
import { sanityApiContext } from "../../../../../../store/sanity-api-context";

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState([
    {
      name: "name",
    },
    {
      name: "topic",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "message",
    },
  ]);
  const { contactForm } = useContext(sanityApiContext);

  useEffect(() => {
    setFormInputs((prev) => {
      const transformedInputs = prev.map((input) => {
        return {
          ...input,
          placeholder: contactForm?.[input?.name],
        };
      });

      return transformedInputs;
    });
  }, [contactForm]);

  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

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
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        await axios.post(
          "https://formsubmit.co/ajax/474feefff46a09c80d6c8f99e2707d75",
          {
            name: values.name,
            email: values.email,
            topic: values.topic,
            message: values.message || `${values.name} לא צירף הודעה`,
          }
        );

        const form = {
          _type: "contact",
          ...values,
        };

        await client.create(form);
        setIsLoading(false);
        setIsFormSubmitted(true);
        resetForm();

        setTimeout(() => {
          if (!isFormSubmitted) {
            setIsFormSubmitted(false);
          }
        }, 3500);
      } catch (error) {
        setIsError(true);
      }
    },
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
      case "topic":
        if (value.length <= 100) {
          formik.setFieldValue(name, value);
        }
        break;
      case "email":
        if (value.length <= 256) {
          formik.setFieldValue(name, value);
        }
        break;
      case "message":
        if (value.length <= 600) {
          formik.setFieldValue(name, value);
        }
        break;
      default:
        break;
    }
  };

  const formInputsList = formInputs?.map((input) => {
    return (
      <FormInput
        key={input.name}
        {...input}
        value={formik.values[input.name]}
        onChange={changeInputHandler}
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
      {isFormSubmitted && <Message isError={isError} />}
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.inputs}>{formInputsList}</div>
        {isLoading && <ClipLoader color="var(--cream6)" />}
        <div className={classes["button-div"]}>
          <button type="submit">{contactForm?.sendButton}</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
