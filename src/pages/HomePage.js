import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Name from "../components/name";
import Thumbnail from "../components/thumbnail";
import Section from "../components/section";
import PersonImgUrl from "../assets/person-image.jpg";
import { H2, H3, H4, P } from "./../components/typography";
import Button from "../components/button";
import Media from "../components/media";

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
      <Section padding="500 100">
        <Container>
          <Row>
            <Col lg={5}>
              <div>
                <img
                  className="img-fluid rounded"
                  src={PersonImgUrl}
                  alt="peron"
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="position-relative">
                <H2>About</H2>
                <H3>Bernard Sydney</H3>
                <H4>Creative Web & App Developer</H4>
                <P>
                  My name is Bernard Sydney. I am a Web Developer, and I'm very
                  passionate and dedicated to my work.
                </P>
                <P>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success. I enjoy every step of the design process,
                  from discussion and collaboration.
                </P>
                <Button>Download CV</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section padding="100 100">
        <Container>
          <Row>
            <Col md={4}>
              <Media />
            </Col>
            <Col md={4}>
              <Media />
            </Col>
            <Col md={4}>
              <Media />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
