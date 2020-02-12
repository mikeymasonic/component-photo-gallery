import React, { Component } from "react";
import Animal from "./Animal";
import animalData from "./data.js";
import "./App.css";

export default class App extends Component {
  state = { selected: null };

  render() {
    const animalNodes = animalData
      .filter(animal => {
        if (!this.state.selected) return true;

        return animal.horns === this.state.selected || animal.keyword === this.state.selected;
      })
      .map(animal => <Animal animal={animal} />);

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };

    return (
      <div>
        <header>
          <img class="logo" src="logo.png" alt="Horn" />
          <h1>Various Horned Animals</h1>
        </header>

        <main>

        <section className="options1">
            <select className="animal-keyword-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Keyword
              </option>
              <option value="narwhal">narwhal</option>
              <option value="rhino">rhino</option>
              <option value="unicorn">unicorn</option>
              <option value="unilego">unilego</option>
            </select>
          </section>


          <section className="options">
            <select className="animal-horn-filter" onChange={handleChange}>
              <option value="" defaultValue>
                # of Horns
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3 </option>
              <option value="100">100</option>
            </select>
          </section>

          <section className="list-section">
            <ul className="animals">{animalNodes}</ul>
          </section>
        </main>
      </div>
    );
  }
}
