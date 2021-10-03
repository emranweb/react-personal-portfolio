import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import Button from "../button";

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gt08c3s",
        "template_1n2lswv",
        form.current,
        "user_Kq1vqHW18hfxQaugfxYHw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);
  return (
    <div>
      <Form ref={form} onSubmit={(e) => formSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            vallue={data.user_name}
            name="user_name"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="user_email"
            value={data.user_email}
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={data.message}
            name="message"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>
        <Button>Message</Button>
      </Form>
    </div>
  );
};

export default Contact;
