import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
  handleSubmit = async e => {
    e.preventDefault();

    console.log(this.state);

    // Check if car reviews exist
    let entry = await Axios.get(
      `https://ironrest.herokuapp.com/findOne/winningTransit?car=${this.state.car}`
    );

    console.log(entry);

    // If car exists, add review to the existing entry
    if (entry.data !== null) {
      console.log("There be data here");
      console.log(entry.data);
      let reviewData = { rating: [...entry.data.rating, this.state.rating] };
      Axios.put(
        `https://ironrest.herokuapp.com/winningTransit/${entry.data._id}`,
        reviewData
      );
    }

    // If car does not exist, create a new entry
    if (entry.data === null) {
      console.log("Doesn't exist");
      let reviewData = { car: this.state.car, rating: [this.state.review] };
      Axios.post("https://ironrest.herokuapp.com/winningTransit", this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  handleChange = e => {
    let field = { [e.target.name]: e.target.value };
    // Axios.delete(
    //   "https://ironrest.herokuapp.com/winningTransit/5dddaada8be4700017b22000"
    // );
    console.log(field);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Form className="form">
        <Form.Group controlId="formCarNumber">
          <Form.Label>Car #</Form.Label>
          <Form.Control
            name="car"
            type="number"
            placeholder="#"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            This can be found by the door.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            name="rating"
            as="select"
            placeholder="Choose"
            onChange={this.handleChange}
          >
            <option defaultValue hidden>
              Choose...
            </option>
            <option value="1">1 - Don't do it.</option>
            <option value="2">
              2 - Could be worse, but could be a whole lot better.
            </option>
            <option value="3">3 - Legit.</option>
            <option value="4">4 - Can't go wrong with this ride.</option>
            <option value="5">5 - A/C is great, no leaks, strong Wi-Fi.</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
