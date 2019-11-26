import React from "react";
import { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Ride from "./Components/Ride/Ride";
import Station from "./Components/Station/Station";
import Nav from "./Components/Nav/Nav";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
// Styling
import "./App.css";

export default class App extends Component {
  state = {
    allStations: [],
    showBlue: false
  };

  componentDidMount() {
    // Get Station Data
    axios
      .get(`https://miami-transit-api.herokuapp.com/api/TrainStations.json`)
      .then(res => {
        let stationData = res.data.RecordSet.Record;

        let stationArray = stationData.map(eachStation => {
          let id = eachStation.StationID;
          let stationName = eachStation.Station;
          return { StationID: id, Station: stationName };
        });

        this.setState({ allStations: stationArray });
      });
  }
  toggleBlue = () => {
    this.setState({
      showBlue: !this.state.showBlue
    });
  };
  render() {
    return (
      <div id="App">
        <Nav
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          right
          noOverlay
          toggleBlue={this.toggleBlue}
        />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              exact
              path="/ride"
              render={props => (
                <Ride
                  {...props}
                  showBlue={this.state.showBlue}
                  allStations={this.state.allStations}
                />
              )}
            />
            <Route
              exact
              path="/ride/:StationID"
              render={props => (
                <Station
                  {...props}
                  allStations={this.state.allStations}
                  StationID={props.match.params.StationID}
                />
              )}
            />
            <Route
              exact
              path="/rate"
              render={props => (
                <ReviewForm {...props} allStations={this.state.allStations} />
              )}
            />
          </Switch>
        </div>
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
