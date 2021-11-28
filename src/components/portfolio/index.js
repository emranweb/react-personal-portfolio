import React from "react";
import { H4, P } from "../typography";
import { Link } from "react-router-dom";

const Portfolio = ({ item }) => {
  return (
    <div>
      <img className="img-fluid mb-4 rounded" src={item.thumb} alt="project1" />
      <Link to={`/portfolio/${item.id}`}>{item.title}</Link>
      <P>{item.details.category}</P>
    </div>
  );
};

export default Portfolio;
