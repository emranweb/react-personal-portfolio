import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/person-1.jpg";
import img2 from "../../assets/person-2.jpg";
import img3 from "../../assets/person-3.jpg";
import { ImageWrapper, PersonWrapper, IconWrapper } from "./testimonial.style";
import { FaQuoteRight } from "react-icons/fa";
import { P } from "../typography";

const testimonialData = [
  {
    id: 1,
    name: "Steve Collins",
    company: "Artel Corp.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: img1,
    isactive: true,
  },
  {
    id: 2,
    name: "Steve Collins",
    company: "Artel Corp.",
    content:
      "2 Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.",
    img: img2,
    isactive: false,
  },
  {
    id: 3,
    name: "Steve Collins",
    company: "Artel Corp.",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    img: img3,
    isactive: false,
  },
];

const Testimonial = () => {
  const [data, setData] = useState(testimonialData);

  const ChangeTestimonialItem = (id) => {
    let newData = data.map((item) => {
      if (item.id === id) {
        if (item.isactive === true) {
          return item;
        } else {
          return { ...item, isactive: true };
        }
      } else {
        return { ...item, isactive: false };
      }
    });
    setData(newData);
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="testimonial-content">
              {data
                .filter((item) => item.isactive === true)
                .map((item) => {
                  return (
                    <div className="testimonial-item-content" key={item.id}>
                      <IconWrapper>
                        <FaQuoteRight />
                      </IconWrapper>
                      <P>{item.content}</P>
                      <PersonWrapper>
                        <img className=" round" src={item.img} alt="person" />
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.company}</p>
                        </div>
                      </PersonWrapper>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col lg={6}>
            <ImageWrapper>
              {data.map((item) => {
                return (
                  <div
                    className={
                      item.isactive === true
                        ? "item-image active"
                        : "item-image"
                    }
                    key={item.id}
                  >
                    <img
                      className="img-fluid rounded"
                      src={item.img}
                      onClick={() => ChangeTestimonialItem(item.id)}
                      alt="person"
                    />
                  </div>
                );
              })}
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
