import React from "react";

import Button from "react-bootstrap/Button";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <img
          className="nav-icon"
          src="/icons/train_icon.png"
          alt="train icon"
        />
        <div className="nav-right">
          <Button className="nav-button">Next Ride</Button>
          <Button className="nav-button">Contribute</Button>
          <Button className="nav-button">Feedback</Button>
        </div>
      </nav>
    </div>
  );
}
