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

  const initialValues = {
    name: "",
    email: "",
    service: people[0],
    message: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.message) {
      errors.message = "Required";
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
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="name" className="text-lg font-bold">
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
        </div>
        <div>
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
        </div>
        <div>
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
        <div>
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
        <div className="grid place-items-center">
          <button
            className="rounded-md px-5 py-2 border-4 text-lg border-violet-700 text-white bg-purple-600"
            type="submit"
          >
            Contact Me
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
