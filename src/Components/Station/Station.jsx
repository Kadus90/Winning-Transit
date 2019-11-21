import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Axios from "axios";

// stationID: this.props.match.params.StationID

export default class Station extends Component {
  state = {
    station: {},
    northTrain1: {},
    northTrain2: {},
    northTrain3: {},
    southTrain1: {},
    southTrain2: {},
    southTrain3: {}
  };
  componentDidMount() {
    this.updateStation();
    // this.updateTrains();
  }

  updateStation = () => {
    Axios.get(
      `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.props.StationID}`
    ).then(res => {
      this.setState({ station: res.data.RecordSet.Record });
    });
  };
  updateTrains = () => {
    Axios.get(
      `http://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=${this.state.station.NB_Time1_Train}`
    ).then(res => {
      console.log(this.state);
      console.log(res);
      //   this.setState({ northTrain1: res });
    });
  };
  render() {
    if (this.props.StationID !== this.state.station.StationID) {
      this.updateStation();
      //   if (this.props.StationID === this.state.station.StationID) {
      //     this.updateTrains();
      //   }
    }
    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.station.StationName} Station</h1>
      </div>
    );
  }
}
