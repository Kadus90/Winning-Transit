import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Axios from "axios";
export default class Station extends Component {
  state = {
    stationID: this.props.match.params.StationID
    // station: this.props.params.match.StationID
  };

  componentDidMount() {
    Axios.get(
      `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.state.stationID}`
    ).then(res => {
      console.log(res.data.RecordSet.Record);
      let Station = res.data.RecordSet.Record;
      this.setState({ station: Station });
    });
  }

  render() {
    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.stationID}</h1>
      </div>
    );
  }
}
