import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import Ride from './Components/Ride/Ride';
import Station from './Components/Station/Station';
import Nav from './Components/Nav/Nav';
import ReviewForm from './Components/ReviewForm/ReviewForm';
// Styling
import './App.css';

export default class App extends Component {
  state = {
    allStations: [],
    showBlue: false,
  };

  componentDidMount() {
    // Get Station Data
    axios
        .get(`https://miami-transit-api.herokuapp.com/api/TrainStations.json`)
        .then((res) => {
          const stationData = res.data.RecordSet.Record;

          const stationArray = stationData.map((eachStation) => {
            const id = eachStation.StationID;
            const stationName = eachStation.Station;
            return {StationID: id, Station: stationName};
          });

          this.setState({allStations: stationArray});
        });
  }

  toggleBlue() {
    this.setState({
      showBlue: !this.state.showBlue,
    });
  };

  render() {
    return (
      <div id="App">
        <Nav
          pageWrapId={'page-wrap'}
          outerContainerId={'App'}
          right
          noOverlay
          toggleBlue={this.toggleBlue}
        />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/ride"
              render={(props) => (
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
              render={(props) => (
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
              render={props => <ReviewForm {...props} allStations={this.state.allStations} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
