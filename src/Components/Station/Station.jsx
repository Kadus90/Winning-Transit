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
      `http://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.state.stationID}`
    ).then(res => {
      console.log(res.data.RecordSet.Record);
      //   this.setState( stationID: {res.data.RecordSet.Record.StationID}, station: {res.data.RecordSet.Record}
      // );
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
