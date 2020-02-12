import React, { Component } from 'react';

export default class Animal extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.animal.keyword}</h2>
                <p className="animal-title">{this.props.animal.title}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.animal.url}
                    src={this.props.animal.url} />
            </div>
            <p className="horns-class">Horns: {this.props.animal.horns}</p>
        </li>
    }
}

//this is my card - how you want it to look