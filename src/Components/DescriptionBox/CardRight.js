import React from "react";
import "./Card.css";

import card1 from "../assests/card1.png";

const CardRight = () => {
  return (
    <div className="cards-center">
      <div className="card-body-wrapper">
        <div className="title">Digital Strategy Consulting</div>
        <div className="paragraph">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </div>
        <div className="btn-wrapper">LEARN MORE</div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src={card1} className="image" alt="..." />
      </div>
    </div>
  );
};

export default CardRight;
