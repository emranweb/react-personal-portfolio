import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={data.name}
            placeholder="Enter Name"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
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
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows={3}
            value={data.message}
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
