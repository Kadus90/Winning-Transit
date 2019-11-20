import React from "react";
import { Link } from "react-router-dom";

// Styling
import Button from "react-bootstrap/Button";
import "./Menu.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <div className="nav-left">
          <Link to="/">
            <img
              className="nav-icon"
              src="/icons/train_icon.png"
              alt="train icon"
            />
          </Link>
          <Link className="nav-title" to="/">
            <h1>WinningTransit</h1>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/ride">
            <Button className="nav-button">Next Ride</Button>
          </Link>
          <Button className="nav-button">Contribute</Button>
          <Button className="nav-button">Feedback</Button>
        </div>
      </nav>
    </div>
  );
}
