import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
//import { P } from "../typography";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState("");

  const ChangeTestimonialItem = (e) => {
    console.log(e.target.dataset.index);
    setIndex(e.target.dataset.index);
  };

  const testimonialData = [
    {
      id: 0,
      name: "Steve Collins",
      company: "Artel Corp.",
      content:
        "1 Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      name: "Steve Collins",
      company: "Artel Corp.",
      content:
        "2 Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Steve Collins",
      company: "Artel Corp.",
      content:
        "3 Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.",
      img: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    setData(testimonialData[index]);
  }, [index]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonial-section">
              <div className="testimonial-content">
                <div>{data.content}</div>
              </div>
              <div className="testimonial-images">
                {testimonialData.map((item) => {
                  return (
                    <div className="item_img" key={item.id}>
                      <img
                        src={item.img}
                        alt="person"
                        data-index={item.id}
                        onClick={(e) => ChangeTestimonialItem(e)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
