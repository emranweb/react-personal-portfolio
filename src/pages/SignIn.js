import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UserCon } from "../App";

const SignIn = () => {
  const userDispatch = useContext(UserCon);
  const [userData, setData] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userDispatch({ type: "add", payload: userData });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={userData.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={userData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={userData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
