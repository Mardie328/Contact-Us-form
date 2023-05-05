import React from "react";
import HeaderComponent from "./HeaderComponent.jsx";
import Form from "./form.jsx";
import axios from "axios";

const FormContainer = () => {
  const submitFormData = (form) => {
    const userData = {
      id: form.id,
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
      <Form submitForm={submitFormData} />
    </div>
  );
};

export default FormContainer;
