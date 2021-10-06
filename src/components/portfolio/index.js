import React from "react";
import { H4, P } from "../typography";

const Portfolio = ({ item }) => {
  return (
    <div>
      <img className="img-fluid mb-4 rounded" src={item.thumb} alt="project1" />
      <H4>{item.title}</H4>
      <P>{item.details.category}</P>
    </div>
  );
};

export default Portfolio;
