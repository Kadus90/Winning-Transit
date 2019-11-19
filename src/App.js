import React from "react";
import axios from "axios";

// Components
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";

// Styling
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
