import React, { Component } from "react";

import Ride from "../Ride/Ride";
import Trains from "../Trains/Trains";
import Axios from "axios";

import "./Station.css";

export default class Station extends Component {
  state = {
    ready: false,
    station: {},
    trains: {
      northTrain1: {
        name: "NB_Time1_Train",
        timeName: "NB_Time1",
        time: "",
        data: {},
        cars: []
      },
      northTrain2: {
        name: "NB_Time2_Train",
        timeName: "NB_Time2",
        time: "",
        data: {},
        cars: []
      },
      northTrain3: {
        name: "NB_Time3_Train",
        timeName: "NB_Time3",
        time: "",
        data: {},
        cars: []
      },
      southTrain1: {
        name: "SB_Time1_Train",
        timeName: "SB_Time1",
        time: "",
        data: {},
        cars: []
      },
      southTrain2: {
        name: "SB_Time2_Train",
        timeName: "SB_Time2",
        time: "",
        data: {},
        cars: []
      },
      southTrain3: {
        name: "SB_Time3_Train",
        timeName: "SB_Time3",
        time: "",
        data: {},
        cars: []
      }
    }
  };
  componentDidMount() {
    this.updateStation();
  }

  updateStation = async () => {
    let result = await Axios.get(
      `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${this.props.StationID}`
    );
    this.setState(
      { station: result.data.RecordSet.Record, ready: false },
      () => {
        this.updateTrains();
      }
    );
  };

  updateTrains = () => {
    let names = this.state.trains;

    Object.keys(names).map(async train => {
      let update = await Axios.get(
        `https://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=${
          this.state.station[names[train].name]
        }`
      );

      if (this.state.station[names[train].name] === "SCH") {
        update.data.RecordSet = "Data currently not available for this train.";
      }

      // if (this.state.station[names[train].name] !== "SCH") {
      //   console.log(this.state.station[names[train].timeName]);
      // }
      names[train] = {
        ...names[train],
        time: this.state.station[names[train].timeName],
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

    this.setState({ trains: trains, ready: true });
  };

  printTrains = () => {
    if (this.state.ready === true) {
      return <Trains {...this.state} />;
    }
  };

  render() {
    if (this.props.StationID !== this.state.station.StationID) {
      this.updateStation();
      // this.generateTrainList();
    }

    return (
      <div>
        <Ride {...this.props} allStations={this.props.allStations} />
        <h1>Welcome to {this.state.station.StationName} Station</h1>
        {this.printTrains()}
      </div>
    );
  }
}
