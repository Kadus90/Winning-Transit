import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Axios from "axios";

// stationID: this.props.match.params.StationID

export default class Station extends Component {
  state = {
    station: {},
    trains: {
      northTrain1: { name: "NB_Time1_Train" },
      northTrain2: { name: "NB_Time2_Train" },
      northTrain3: { name: "NB_Time3_Train" },
      southTrain1: { name: "SB_Time1_Train" },
      southTrain2: { name: "SB_Time2_Train" },
      southTrain3: { name: "SB_Time3_Train" }
    }
  };
  componentDidMount() {
    this.updateStation();
  }

  updateStation = async () => {
    let result = await Axios.get(
      `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.props.StationID}`
    );
    this.setState({ station: result.data.RecordSet.Record }, () => {
      this.updateTrains();
    });
  };

  updateTrains = prop => {
    let names = this.state.trains;

    Object.keys(names).map(async key => {
      // console.log(key);
      let result = await Axios.get(
        `http://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=${
          this.state.station[this.state.trains[key].name]
        }`
      );

      console.log("did this happen?");
      console.log(key);
      console.log(result);
      // this.setState({
      //   trains: { ...this.state.trains, [key]: result.data.RecordSet }
      // });
    });
  };

  render() {
    if (this.props.StationID !== this.state.station.StationID) {
      this.updateStation();
    }

    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.station.StationName} Station</h1>
      </div>
    );
  }
}
