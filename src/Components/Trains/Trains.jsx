import React from "react";

import "./Trains.css";
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
    // console.log(northTrains, southTrains);
    return generateTrains(northTrains, southTrains);
  };

  let generateTrains = (north, south) => {
    let northTrains = north.map((train, i) => {
      //   this.loadCars(train);
      if (train.data.Record != null) {
        let line = train.data.Record.LineID;
        let trainStyles = "train " + line;
        return (
          <div key={i}>
            <h4 className={trainStyles}>{train.data.Record.TrainID}</h4>
            {console.log(train.cars, "***********")}
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
            <h4 key={i} className={trainStyles}>
              {train.data.Record.TrainID}
            </h4>
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
          <h3>Northbound</h3>
          <div className="train-container">{northTrains}</div>
        </div>
        <div className="south-bound-container">
          <h3>Southbound</h3>
          <div className="train-container">{southTrains}</div>
        </div>
      </div>
    );
    // console.log(northTrains);
    return allTrains;
  };
  let carPrint = carsArray => {
    console.log("=-=-=-=-=-=-", carsArray);
    let cars = carsArray.map((eachItem, i) => {
      console.log(eachItem);
      return (
        <div>
          <p key={i}>{eachItem}</p>
        </div>
      );
    });

    return cars;
  };
  console.log(props);
  //   console.log(generateTrainList());
  return (
    <div>
      <h2>In Trains</h2>
      {generateTrainList()}
    </div>
  );
}
