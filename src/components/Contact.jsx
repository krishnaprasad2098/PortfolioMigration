import React from "react";
import Form from "../components/Form";
import form from "../assets/form.png";

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center py-7">Reach Me Out</h1>
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:max-w-fit lg:mx-auto md:px-10 xl:gap-10 ">
        <div className="xl:max-w-lg  px-3 py-6 ">
          <Form />
        </div>
        <img
          src={form}
          alt=""
          className="md:max-w-[50%] xl:max-w-lg lg:block lg:max-w-md sm:max-w-[100%] max-w-[70%] h-auto yarn hidden "
        />
      </div>
    </div>
  );
};

export default Contact;
