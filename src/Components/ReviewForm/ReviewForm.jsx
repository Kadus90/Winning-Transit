import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./ReviewForm.css";
export default class ReviewForm extends Component {
  render() {
    return (
      <Form className="form">
        <Form.Group controlId="formCarNumber">
          <Form.Label>Car #</Form.Label>
          <Form.Control type="number" placeholder="#" />
          <Form.Text className="text-muted">
            This can be found by the door.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" placeholder="Choose">
            <option defaultValue hidden>
              Choose...
            </option>
            <option value="1">1 - Don't do it.</option>
            <option value="2">
              2 - Could be worse, but could be a whole lot better.
            </option>
            <option value="3">3 - Legit.</option>
            <option value="4">4 - Can't go wrong with this ride.</option>
            <option value="5">5 - A/C is great, no leaks, strong Wi-Fi</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
