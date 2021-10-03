<<<<<<< HEAD
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

=======
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

>>>>>>> 684d2893c6c89cf4ee6447d301683d9b0c72af71
  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
  console.log(data);
=======
>>>>>>> 684d2893c6c89cf4ee6447d301683d9b0c72af71
  return (
    <div>
      <Form ref={form} onSubmit={(e) => formSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
<<<<<<< HEAD
            type="text"
            placeholder="Enter Name"
            vallue={data.user_name}
            name="user_name"
=======
            name="name"
            type="text"
            value={data.name}
            placeholder="Enter Name"
>>>>>>> 684d2893c6c89cf4ee6447d301683d9b0c72af71
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
<<<<<<< HEAD
            type="email"
            placeholder="Enter Email"
            name="user_email"
            value={data.user_email}
            onChange={(e) => inputChange(e)}
=======
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => inputChange(e)}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            name="subject"
            type="text"
            placeholder="Enter Subject"
            onChange={(e) => inputChange(e)}
            value={data.subject}
>>>>>>> 684d2893c6c89cf4ee6447d301683d9b0c72af71
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
<<<<<<< HEAD
            as="textarea"
            rows={3}
            value={data.message}
            name="message"
=======
            name="message"
            as="textarea"
            rows={3}
            value={data.message}
>>>>>>> 684d2893c6c89cf4ee6447d301683d9b0c72af71
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>
        <Button>Message</Button>
      </Form>
    </div>
  );
};

export default Contact;
