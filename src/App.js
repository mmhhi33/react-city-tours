import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import TourList from "./components/TourList";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <h1 className="myhid">
          <a href="/">Grand Haven Tourist City</a>
        </h1>
        <TourList />
      </main>
    );
  }
}

export default App;
