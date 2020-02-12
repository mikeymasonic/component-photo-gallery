import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
            {/* <img src={this.props.logoText} /> */}
        <header>
          <img className="logo" src="logo.png" alt="Horn" />
          <h1>Various Horned Animals</h1>
        </header>
        
      </div>
    );
  }
}
