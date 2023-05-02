import React from "react";
import { useState } from "react";

const Form = (props) => {
  const INITIAL_STATE = {
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.id]: event.target.value,
    };
    console.log(updatedForm);
    setForm(updatedForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass form data to the parent container
    props.submitForm(form);

    setForm(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <input
            type="email"
            className="input"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="input"
            id="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <textarea
            type="text"
            className="input"
            id="message"
            placeholder="Message"
            rows={"5"}
            cols={"50"}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
