import React from "react";
import { Link } from "react-router-dom";

// Styling
import "./Menu.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <div className="nav-left">
          <Link to="/">
            <i class="fas fa-subway"></i>
          </Link>
          <Link className="nav-title" to="/">
            <h1>WinningTransit</h1>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/ride">Next Ride</Link>
          <Link to="">Contribute</Link>
          <Link to="">Feedback</Link>
        </div>
      </nav>
    </div>
  );
}
