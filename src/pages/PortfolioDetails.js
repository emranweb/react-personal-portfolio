import React from "react";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioCon } from "../App";

const PortfolioDetails = (props) => {
  const { data } = useContext(PortfolioCon);
  const newId = props.match.params.id;
  const singledata = data.filter((item) => item.id == newId);
  console.log(singledata);
  const { id, title, details, images } = { ...singledata[0] };

  return (
    <div className="portfolio-container">
      <Container>
        <Row>
          <Col md={12}>
            <div className="portfolio-details-title">
              <h2>{title}</h2>
              <hr />
            </div>
            <div className="portfolio-details-info">
              <h4>Details</h4>
              <ul>
                <li>Catetegory : {details.category}</li>
                <li>client : {details.client}</li>
                <li>imageby : {details.imageby}</li>
              </ul>
              <p>{details.info}</p>
            </div>
            <div className="portfolio-details-images">
              {images.map((item) => {
                return (
                  <img className="img-fluid" key={id} src={item} alt="port" />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PortfolioDetails;
