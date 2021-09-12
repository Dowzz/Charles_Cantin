import React, { Component } from "react";
import { photoData } from "../data/photoData";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import $ from "jquery";
import ScrollUp from "./ScrollUp";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("radioDisplay"));
  menu.fadeToggle();
};

const fading = keyframes`${fadeIn}`;

const Fadein = styled.div`
  animation: 3s ${fading};
`;

export default class Selector extends Component {
  state = {
    photos: photoData,
    radios: [
      { id: 1, value: "Mariage" },
      { id: 2, value: "Grossesse" },
      { id: 3, value: "Bébé" },
      { id: 4, value: "Famille" },
      { id: 5, value: "Bapteme" },
      { id: 6, value: "Couple" },
      { id: 7, value: "Portrait" },
    ],
    selectedRadio: "Mariage",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { photos, radios, selectedRadio } = this.state;
    return (
      <div className="selector">
        <h3 className="selection" onClick={menuToggle}>
          Filtre
        </h3>
        <div className="radioDisplay">
          <ul className="categorie">
            {radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <input
                    type="radio"
                    name="radio"
                    checked={radio.value === selectedRadio}
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleRadio}
                  />
                  <label htmlFor={radio.value}>{radio.value}</label>
                </li>
              );
            })}
          </ul>
        </div>

        <ScrollUp />

        <div className="container-slider">
          {photos
            .filter((item) => item.categorie.includes(selectedRadio))
            .map((item) => {
              return (
                <Fadein key={item.id}>
                  <div className="slide" key={item.id}>
                    <img src={item.source} alt="" />
                    <div className="text">{item.name}</div>
                  </div>
                </Fadein>
              );
            })}
        </div>
      </div>
    );
  }
}
