import React, { useState } from "react";
import { nanoid } from "nanoid";

const FormComponent = (props) => {
  const INITIAL_STATE = {
    id: nanoid(),
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(INITIAL_STATE);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.id]: event.target.value,
    };
    setForm(updatedForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validate form fields
    if (!form.name || !form.email || !form.message) {
      setSubmitError("Name, email, and message fields are required");
      setSubmitSuccess(false);
      return;
    }

    if (!isValidEmail(form.email)) {
      setSubmitError("Please enter a valid email address");
      setSubmitSuccess(false);
      return;
    }
    // submit form data to the parent container
    props.submitForm(form);
    setForm(INITIAL_STATE);
    setSubmitSuccess(
      true,
      setTimeout(() => setSubmitSuccess(false), 3500)
    );
    setSubmitError(null);
  };

  const isValidEmail = (email) => {
    // basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submitSuccess && (
          <div className="success-message">
            Submission successful. Thank you for contacting us!
          </div>
        )}

        <div>
          {submitError && !form.name && (
            <div className="error-message">Please enter your name *</div>
          )}
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          {submitError && !form.email && (
            <div className="error-message">Please enter your email *</div>
          )}
          <input
            type="email"
            className="input"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="input"
            id="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          {submitError && !form.message && (
            <div className="error-message">Please enter your message *</div>
          )}
          <textarea
            className="input"
            id="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
