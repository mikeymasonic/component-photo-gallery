import React, { Component } from "react";
import Animal from "./Animal";
import animalData from "./data.js";

export default class Body extends Component {
  state = { selected: null };

  render() {
    const animalNodes = animalData
      .filter(animal => {
        if (!this.state.selected) return true;

        return animal.horns === this.state.selected || animal.keyword === this.state.selected || animal.description === this.state.selected || animal.title === this.state.selected;
      })
      .map((animal) => <Animal key={animal.title} animal={animal} />);
    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };
    return <div> 
       <main>
        <section className="options">
            <select className="animal-keyword-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Keyword
              </option>
              {animalData.map(animal => <option key={animal.title}>{animal.keyword}</option>)};
            </select>

            <select className="animal-title-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Title
              </option>
              {animalData.map(animal => <option key={animal.title}>{animal.title}</option>)};
            </select>

            <select className="animal-horn-filter" onChange={handleChange}>
              <option value="" defaultValue>
                # of Horns
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3 </option>
              <option value="100">100</option>
            </select>
            
            <select className="animal-description-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Description
              </option>
              {animalData.map(animal => <option key={animal.title}>{animal.description}</option>)};
            </select>

            
          </section>

          <section className="list-section">
            <ul className="animals">{animalNodes}</ul>
          </section>
        </main>
        
            </div>;
  }
}

//this is my deck - how you want it to run