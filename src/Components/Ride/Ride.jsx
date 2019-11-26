import React from "react";

import "./Ride.css";

import StationPicker from "../StationPicker/StationPicker";

export default function Ride(props) {
  return (
    <div className="ride-page-content">
      <StationPicker {...props} allStations={props.allStations} />
    </div>
  );
}
