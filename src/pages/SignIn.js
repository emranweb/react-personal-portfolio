import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserCon } from "../App";

const SignIn = () => {
  const UserContext = useContext(UserCon);
  const [userData, setData] = useState({ name: "", email: "", password: "" });
  const [warning, setWaring] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...userData, [e.target.name]: e.target.value });
    setWaring(false);
  };

  const handleSubmit = (e) => {
    const userDataFromApp = UserContext.data;
    if (JSON.stringify(userDataFromApp) === JSON.stringify(userData)) {
      setWaring(false);
      localStorage.setItem("islogin", true);
      history.push("/admin");
    } else {
      setWaring(true);
      localStorage.setItem("islogin", false);
    }
    e.preventDefault();
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
          <Row>
            <div>
              <h4>{warning === false ? "" : "invlid"}</h4>
            </div>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
