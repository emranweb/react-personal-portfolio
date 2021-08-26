import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Name from "../components/name";
import Thumbnail from "../components/thumbnail";
import Section from "../components/section";

const HomePage = () => {
  return (
    <>
      <Section padding="200 100">
        <div className="text-section">
          <Container>
            <Row>
              <Col lg={8}>
                <Name />
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Container>
        </div>
        <div className="thumnail">
          <Thumbnail />
        </div>
      </Section>
    </>
  );
};

export default HomePage;
