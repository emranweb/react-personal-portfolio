import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Name from "../components/name";
import Thumbnail from "../components/thumbnail";
import Section from "../components/section";
import PersonImgUrl from "../assets/person-image.jpg";
import { H2, H3, H4, P } from "./../components/typography";
import Button from "../components/button";
import Media from "../components/media";
import {
  FaDesktop,
  FaThinkPeaks,
  FaAccusoft,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import client1 from "../assets/1.png";
import Client from "../components/client";
import Testimonial from "./../components/testimonial/index";
import Blog from "../components/blog";
import Contact from "../components/contact";

import { useContext } from "react";
import { PortfolioCon } from "../App";

const HomePage = () => {
  const PortData = useContext(PortfolioCon);
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
            <Col lg={{ span: 6, offset: 1 }}>
              <div className="position-relative">
                <H2 className="mb-2">About</H2>
                <H3 className="mb-3">Bernard Sydney</H3>
                <H4 className="mb-4">Creative Web & App Developer</H4>
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
            {PortData.data.map((item) => {
              return (
                <Col md={4} key={item.id}>
                  <div>
                    <img
                      className="img-fluid"
                      src={item.thumb}
                      alt="port image"
                    />
                    <div>{item.title}</div>
                  </div>
                </Col>
              );
            })}
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
              <div className="position-relative pb-5">
                <H2>Testimonial</H2>
                <H3>What Clients Say </H3>
              </div>
            </Col>
            <Testimonial></Testimonial>
          </Row>
        </Container>
      </Section>
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="position-relative pb-5">
                <H2>News</H2>
                <H3>Latest News </H3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Blog />
            </Col>
            <Col lg={4}>
              <Blog />
            </Col>
            <Col lg={4}>
              <Blog />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="position-relative pb-5">
                <H2>Contact</H2>
                <H3>Get In Touch </H3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Contact />
            </Col>
            <Col lg={6}>
              <p>
                A full stack allaround designer that tristique est placerat in
                massa consectetur quisque lobortis vitae faucibus diam Dolor sit
                amet, consectetur adipiscing elit viverra tristique.
              </p>
              <address>
                <p>Name: Rob Davidson Address: New York, USA</p>
                <p>Phone: +1 234-567-890</p>
                <p>Hours: 6:00 am – 2:00 am</p>
              </address>
            </Col>
          </Row>
        </Container>
      </section>
      <footer>
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2010 -2021 emranweb. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <ul>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
