import React, { Component } from "react";

import Ride from "../Ride/Ride";
export default class Station extends Component {
  state = {
    // station: this.props.params.match.StationID
  };
  render() {
    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
      </div>
    );
  }
}
