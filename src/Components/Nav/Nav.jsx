import React from "react";

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
          <button>
            <h1>Next Ride</h1>
          </button>
          <button>
            <h1>Contribute</h1>
          </button>
          <button>
            <h1>Feedback</h1>
          </button>
        </div>
      </nav>
    </div>
  );
}
