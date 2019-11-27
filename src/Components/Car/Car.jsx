import React, { Component } from "react";

import Axios from "axios";
//export default function Car(props) {

export default class Car extends Component {
  state = {
    rating: "Unknown"
  };

  //   componentDidMount() {
  //     this.loadCarData();
  //   }
  loadCarData = () => {
    let avg;
    let carRating = Axios.get(
      `https://ironrest.herokuapp.com/findOne/winningTransit?car=${this.props.car}`
    ).then(res => {
      if (res.data !== null) {
        let ratings = res.data.rating;

        let numRatings;
        if (ratings.length > 1) {
          numRatings = ratings.map(Number);
          avg =
            Math.round(
              (numRatings.reduce((acc, c) => acc + c, 0) / numRatings.length) *
                100
            ) / 100;
        } else {
          avg = Number(ratings);
        }
      } else {
        avg = "Unrated";
      }
      this.setState({ rating: avg });
    });
  };

  render() {
    if (this.state.rating === "Unknown") {
      this.loadCarData();
    }
    return (
      <div key={this.props.i}>
        <p className="car">
          {this.props.car} - {this.state.rating}
        </p>
      </div>
    );
  }
}
