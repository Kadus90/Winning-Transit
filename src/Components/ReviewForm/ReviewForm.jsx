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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
