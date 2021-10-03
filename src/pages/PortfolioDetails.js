import React from "react";
import { useContext } from "react";
import { PortfolioCon } from "../App";

const PortfolioDetails = (props) => {
  const PortDispatch = useContext(PortfolioCon);

  console.log(props);
  return (
    <div>
      <h1
        onClick={() =>
          PortDispatch.count({ type: "add", payload: { name: "test" } })
        }
      >
        Portfolio Details
      </h1>
    </div>
  );
};
export default PortfolioDetails;
