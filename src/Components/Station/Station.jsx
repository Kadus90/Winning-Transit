import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Axios from "axios";

// stationID: this.props.match.params.StationID

export default class Station extends Component {
  state = {
    station: {},
    trains: {
      northTrain1: { name: "NB_Time1_Train", data: {}, cars: {} },
      northTrain2: { name: "NB_Time2_Train", data: {}, cars: {} },
      northTrain3: { name: "NB_Time3_Train", data: {}, cars: {} },
      southTrain1: { name: "SB_Time1_Train", data: {}, cars: {} },
      southTrain2: { name: "SB_Time2_Train", data: {}, cars: {} },
      southTrain3: { name: "SB_Time3_Train", data: {}, cars: {} }
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

  updateTrains = () => {
    let names = this.state.trains;

    Object.keys(names).map(async train => {
      let update = await Axios.get(
        `http://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=${
          this.state.station[names[train].name]
        }`
      );

      if (this.state.station[names[train].name] === "SCH") {
        update.data.RecordSet = "Data currently not available for this train.";
      }

      names[train] = {
        ...names[train],
        data: update.data.RecordSet
      };

      this.setState({ trains: names }, () => this.loadCars(train));
    });
  };

  loadCars = train => {
    let cars;
    let trains = this.state.trains;

    if (trains[train].data !== "Data currently not available for this train.") {
      cars = trains[train].data.Record.Cars.split("-");
    } else {
      cars = "Car data unavailable.";
    }

    trains[train].cars = cars;

    this.setState({ trains: trains });
  };

  generateTrainList = () => {
    let allTrainKeys = Object.keys(this.state.trains);
    let northTrains = [];
    let southTrains = [];

    console.log(allTrainKeys);
    allTrainKeys.forEach(train => {
      if (train.startsWith("north") === true) {
        console.log("north Train!", northTrains, this.state.trains[train]);
        northTrains.push(this.state.trains[train]);
        console.log(northTrains);
      }
      if (train.startsWith("south") === true) {
        console.log("south Train!");

        southTrains.push(this.state.trains[train]);

        console.log(southTrains);
      }
    });
    // this.generateTrains(northTrains, southTrains);
  };

  render() {
    if (this.props.StationID !== this.state.station.StationID) {
      this.updateStation();
      this.generateTrainList();
    }

    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.station.StationName} Station</h1>
        <div className="north-bound-container"></div>
        <div className="south-bound-container"></div>
      </div>
    );
  }
}
