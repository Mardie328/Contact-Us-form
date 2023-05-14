import React from "react";
import HeaderComponent from "./HeaderComponent.jsx";
import FormComponent from "./FormComponent.jsx";
import axios from "axios";
import { nanoid } from "nanoid";

const FormContainer = () => {
  const submitFormData = (form) => {
    const userData = {
      id: nanoid(),
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    axios
      .post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        userData
      )
      .then((response) => {
        console.log(response.status, response.data.token);
      });
  };

  return (
    <div className="form-container">
      <HeaderComponent />
      <FormComponent submitForm={submitFormData} />
    </div>
  );
};

export default FormContainer;
