import React from "react";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-area">
        <p className="hero-text">
          There are many factors in life that are uncontrollable
        </p>
        <p className="hero-text">
          The quality of your train car does not have to be one of them.
        </p>
        <p className="hero-text">
          Be a part of our community and learn to choose wisely on your next
          ride.
        </p>
        <h1 className="hero-title">Welcome to WinningTransit</h1>
      </div>
      <div
        className="hero-background-img"
        style={{ backgroundImage: 'url("./img/brickellSouthboundTrain1.png")' }}
      ></div>
    </div>
  );
}
