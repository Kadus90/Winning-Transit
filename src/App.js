import React from "react";

// Components
import Nav from "./Components/Nav/Nav";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Welcome to WinningTransit</h1>
      <p>
        There are many factors in life that are uncontrollable but the quality
        of your train car does not have to be one of them. Be a part of our
        community and learn to choose wisely on your next ride.
      </p>
    </div>
  );
}

export default App;
