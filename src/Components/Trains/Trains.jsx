import React from "react";
import Axios from "axios";
import "./Trains.css";

import Car from "../Car/Car";

export default function Trains(props) {
  let generateTrainList = () => {
    let allTrainKeys = Object.keys(props.trains);
    let northTrains = [];
    let southTrains = [];

    allTrainKeys.forEach(train => {
      if (train.startsWith("north") === true) {
        northTrains.push(props.trains[train]);
      }
      if (train.startsWith("south") === true) {
        southTrains.push(props.trains[train]);
      }
    });
    return generateTrains(northTrains, southTrains);
  };

  let generateTrains = (north, south) => {
    let northTrains = north.map((train, i) => {
      if (train.data.Record != null) {
        let line = train.data.Record.LineID;
        let trainStyles = "train " + line;
        return (
          <div key={i}>
            <h4 className={trainStyles}>{train.time}</h4>
            <div className="cars">{carPrint(train.cars)}</div>
          </div>
        );
      } else {
        return (
          <h4 key={i} className="train">
            Data unavailable
          </h4>
        );
      }
    });
    let southTrains = south.map((train, i) => {
      if (train.data.Record != null) {
        let line = train.data.Record.LineID;
        let trainStyles = "train " + line;

        return (
          <div key={i}>
            <h4 className={trainStyles}>{train.time}</h4>
            <div className="cars">{carPrint(train.cars)}</div>
          </div>
        );
      } else {
        return (
          <h4 key={i} className="train">
            Data unavailable
          </h4>
        );
      }
    });
    let allTrains = (
      <div className="trains-container">
        <div className="north-bound-container">
          <h3>North</h3>
          <div className="train-container">{northTrains}</div>
        </div>
        <div className="south-bound-container">
          <h3>South</h3>
          <div className="train-container">{southTrains}</div>
        </div>
      </div>
    );
    return allTrains;
  };
  let carPrint = carsArray => {
    if (typeof carsArray === "object" && carsArray !== null) {
      let cars = carsArray.map((car, i) => {
        return <Car car={car} i={i} />;
      });
      return cars;
    }
  };
  return <div>{generateTrainList()}</div>;
}
