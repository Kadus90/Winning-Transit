import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Axios from "axios";

// stationID: this.props.match.params.StationID

export default class Station extends Component {
  state = {
    station: {}
  };
  componentDidMount() {
    Axios.get(
      `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.props.StationID}`
    ).then(res => {
      this.setState({ station: res.data.RecordSet.Record });
    });
  }

  render() {
    if (this.props.StationID != this.state.station.StationID) {
      Axios.get(
        `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.props.StationID}`
      ).then(res => {
        this.setState({ station: res.data.RecordSet.Record });
      });
    }
    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.station.StationName}</h1>
      </div>
    );
  }
}
