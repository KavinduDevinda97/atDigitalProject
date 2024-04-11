import React from "react";
import card from "../assests/card.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-center">
      <div className="d-flex align-items-center justify-content-center">
        <img src={card} className="image" alt="..." />
      </div>
      <div className="card-body-wrapper">
        <div className="title">Web & Mobile App Development</div>
        <div className="paragraph">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </div>
        <div className="btn-wrapper">LEARN MORE</div>
      </div>
    </div>
  );
};

export default Card;
