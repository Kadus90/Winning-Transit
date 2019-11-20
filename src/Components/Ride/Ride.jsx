import React from "react";
import { Component } from "react";

import "./Ride.css";
import Menu from "../Menu/Menu";
import StationPicker from "../StationPicker/StationPicker";

export default function Ride(props) {
  return (
    <div>
      <Menu />
      <div className="ride-page-content">
        <StationPicker {...props} allStations={props.allStations} />
      </div>
    </div>
  );
}
