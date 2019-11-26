import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
// Styling
import "./Nav.css";

// let stuff = [
//   { thing: Math.random() },
//   { thing1: Math.random() },
//   { thing2: Math.random() },
//   { thing: Math.random() }
// ];

// stuff.forEach(thing => {
//   Axios.post("https://ironrest.herokuapp.com/winningTransit", thing)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// });

// Axios.post("https://ironrest.herokuapp.com/createCollection/winningTransit");
// Axios.delete("https://ironrest.herokuapp.com/deleteCollection/winningTransit");

// Axios.put(
//   `https://ironrest.herokuapp.com/winningTransit/5ddd3768b23a8d0017ac0780`,
//   { thing: "replaced", newThing: [2, 3, 4] }
// )
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

export default props => {
  return (
    <div className="nav-container">
      <Link to="/" style={{ color: "#42be08" }}>
        <i className="fas fa-subway fa-3x"></i>
      </Link>
      <Menu {...props}>
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link to="/ride" className="menu-item">
          Ride
        </Link>
        <Link to="" className="menu-item">
          Contribute
        </Link>
        <Link to="" className="menu-item">
          Feedback
        </Link>
      </Menu>
    </div>
  );
};
