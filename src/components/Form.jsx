import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Formik, useFormik } from "formik";

const Form = () => {
  const people = [
    { id: 1, name: "Web Application Development" },
    { id: 2, name: "App Development" },
    { id: 3, name: "1:1 Mentoring" },
  ];
  const [selectedService, setSelectedservice] = useState(people[0]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    service: people[0],
    message: "",
  };
  const onSubmit = (values, { resetForm }) => {
    if (!values.name || !values.email || !values.message) {
      setErrorMessage("Please fill in all required fields.");
      setSuccessMessage("");
      console.log(values);
    } else {
      setErrorMessage("");
      setSuccessMessage("Form submitted successfully!");
      formik.resetForm(values);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required Name";
    }

    if (!values.email) {
      errors.email = "Required Email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.message) {
      errors.message = "Required Message";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors);
  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form onSubmit={formik.handleSubmit} className="">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg font-bold ">
              Name
            </label>
            <input
              type="text"
              className="w-full py-2 px-4 bg-transparent border-2 border-purple-400 rounded-md"
              id="name"
              name="name"
              placeholder="Your Good Name..."
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <p className="text-red-500">{formik.errors.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-bold">
              E-mail
            </label>
            <input
              type="email"
              className="w-full py-2 px-4 bg-transparent border-2 border-purple-400 rounded-md"
              id="email"
              name="email"
              placeholder="Your E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <p className="text-red-500">{formik.errors.email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="service">
              What can I do for you ?
            </label>
            <Dropdown
              service={people}
              selectedoption={formik.values.service}
              setSelectedoption={(option) =>
                formik.setFieldValue("service", option)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-bold">
              Your Message
            </label>
            <textarea
              className="resize-none w-full py-2 px-4 bg-transparent border-2 border-purple-400 rounded-md"
              id="message"
              name="message"
              placeholder="Type your message..."
              rows="5"
              cols="40"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>
          <div className="grid place-items-center my-5">
            <button
              className="rounded-md zoom-button px-5 py-2 border-4 text-lg border-violet-700 text-white bg-purple-600"
              type="submit"
            >
              Contact Me
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
