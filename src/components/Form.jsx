import React from "react";
import { useState } from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name is ${form.name}`);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.id]: event.target.value,
    };
    setForm(updatedForm);
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
          <input type="text" className="input" placeholder="Subject"></input>
        </div>
        <div>
          <textarea
            type="text"
            className="message"
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
