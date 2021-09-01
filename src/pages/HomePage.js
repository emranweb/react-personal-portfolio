import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Name from "../components/name";
import Thumbnail from "../components/thumbnail";
import Section from "../components/section";
import PersonImgUrl from "../assets/person-image.jpg";
import { H2, H3, H4, P } from "./../components/typography";
import Button from "../components/button";
import Media from "../components/media";
import { FaDesktop, FaThinkPeaks, FaAccusoft } from "react-icons/fa";
import pro1 from "../assets/project-01.jpg";
import client1 from "../assets/1.png";
import Client from "../components/client";
import Testimonial from "./../components/testimonial/index";

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
              <Media>
                <FaDesktop></FaDesktop>
                <div>
                  <H4>Web Development</H4>
                  <P>
                    Web design is a similar process of creation, with the
                    intention of presenting...
                  </P>
                </div>
              </Media>
            </Col>
            <Col md={4}>
              <Media>
                <FaThinkPeaks></FaThinkPeaks>
                <div>
                  <H4>Creative Design</H4>
                  <P>
                    Web design is a similar process of creation, with the
                    intention of presenting...
                  </P>
                </div>
              </Media>
            </Col>
            <Col md={4}>
              <Media>
                <FaAccusoft></FaAccusoft>
                <div>
                  <H4>Brand Identity</H4>
                  <P>
                    Web design is a similar process of creation, with the
                    intention of presenting...
                  </P>
                </div>
              </Media>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section bgcolor>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="position-relative mb-5">
                <H2>Portfolio</H2>
                <H3>Featured Works</H3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-5">
                <img
                  className="img-fluid mb-4 rounded"
                  src={pro1}
                  alt="project1"
                />
                <H4>Beauty Girl</H4>
                <P>Design</P>
              </div>
            </Col>
          </Row>
          <Button>Download CV</Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <div className="d-flex flex-wrap">
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
              <Client>
                <img src={client1} alt="client1" />
              </Client>
            </div>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="position-relative">
                <H2>Testimonial</H2>
                <H3>What Clients Say </H3>
              </div>
            </Col>
            <Testimonial></Testimonial>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
