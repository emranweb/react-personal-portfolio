import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { P } from "../typography";

const Testimonial = () => {
  const [index, setIndex] = useState(1);
  const elementRef = useRef();
  const ChangeTestimonialItem = (e) => {
    console.log(elementRef);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonial-section">
              <div className="testimonial-content">
                <div
                  className="testimonial-content-item active"
                  ref={elementRef}
                >
                  <P>
                    Awesome template, well written code and looks great on any
                    platform. The customer support is very helpful and as huge
                    asset to this template. Overall a good design, that I am
                    quite happy with.Awesome template, well written code and
                    looks great on any platform. The customer support is very
                    helpful and as huge asset to this template. Overall a good
                    design, that I am quite happy with.
                  </P>
                </div>
                <div className="testimonial-content-item">
                  <P>
                    Awesome template, well written code and looks great on any
                    platform. The customer support is very helpful and as huge
                    asset to this template. Overall a good design, that I am
                    quite happy with.Awesome template, well written code and
                    looks great on any platform. The customer support is very
                    helpful and as huge asset to this template. Overall a good
                    design, that I am quite happy with.
                  </P>
                </div>
                <div className="testimonial-content-item">
                  <P>
                    Awesome template, well written code and looks great on any
                    platform. The customer support is very helpful and as huge
                    asset to this template. Overall a good design, that I am
                    quite happy with.Awesome template, well written code and
                    looks great on any platform. The customer support is very
                    helpful and as huge asset to this template. Overall a good
                    design, that I am quite happy with.
                  </P>
                </div>
              </div>
              <div className="testimonial-images">
                <img
                  src="https://via.placeholder.com/150"
                  data-index="1"
                  alt="person"
                  onClick={(e) => ChangeTestimonialItem(e)}
                />
                <img
                  src="https://via.placeholder.com/170"
                  data-index="2"
                  alt="person"
                />
                <img
                  src="https://via.placeholder.com/180"
                  data-index="3"
                  alt="person"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
