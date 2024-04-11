import React from "react";
import "./Hero.css"; // Import CSS file for styling
import Hero from "../assests/Hero.png"; // Import your hero image file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={Hero} alt="" className="hero-img" />
      <div className="content-web">
        <span>
          We crush your competitors, goals, and sales records - without the B.S.
        </span>
        <button className="content-btn">Get free consultation</button>
      </div>
    </div>
  );
};

export default HeroSection;
