import React from "react";
import { Component } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Ride from "./Components/Ride/Ride";
import Station from "./Components/Station/Station";

// Styling
import "./App.css";

export default class App extends Component {
  state = {
    allStations: []
  };

  componentDidMount() {
    // Get Station Data
    axios
      .get(`https://miami-transit-api.herokuapp.com/api/TrainStations.json`)
      .then(res => {
        let stationData = res.data.RecordSet.Record;
        console.log(stationData);
        console.log("What what what");

        let stationArray = stationData.map(eachStation => {
          let id = eachStation.StationID;
          let stationName = eachStation.Station;
          return { StationID: id, Station: stationName };
        });

        console.log(stationArray);
        // const stations = res.data;
        this.setState({ allStations: stationArray });
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/ride"
            render={props => (
              <Ride {...props} allStations={this.state.allStations} />
            )}
          />
          <Route
            exact
            path="/ride/:StationID"
            render={props => (
              <Station {...props} allStations={this.state.allStations} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// Create the collection
// axios
//   .post("https://ironrest.herokuapp.com/createCollection/winningTransit")
//   .then(res => {
//     console.log(res.data);
//   });

// Post to the collection
// axios
//   .post("https://ironrest.herokuapp.com/winningTransit", {
//     testing: "Winning"
//   })
//   .then(res => {
//     console.log(res.data);
//   });

// Delete an item from the collection.
// axios
//   .delete(
//     "https://ironrest.herokuapp.com/winningTransit/5dd43f3e7b55290017a2b1aa"
//   )
//   .then(res => {
//     console.log(res.data);
//   });
