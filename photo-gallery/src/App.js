import React, { Component } from "react";
// import Animal from "./Animal";
// import animalData from "./data.js";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js"

export default class App extends Component {
  // state = { selected: null };

  render() {

    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
