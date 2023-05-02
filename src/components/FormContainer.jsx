import React from "react";
import Header from "./header";
import Form from "./form";

const FormContainer = (form) => {
  const submitFormData = () => {
    console.log(form);
    console.log(`sending...`);
  };

  return (
    <div className="form-container">
      <Header />
      <Form submitForm={submitFormData} />
    </div>
  );
};

export default FormContainer;
