import React, { Component } from "react";
import Navbar from "../component/Navbar";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";
import Footer from "../component/Footer";
import $ from "jquery";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};
const zoomAnimation = keyframes`${zoomInDown}`;

const ZoomDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;
export default class Prestation extends Component {
  render() {
    return (
      <div>
        <button className="responsive" onClick={menuToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="hamburger">
          <Navbar />
        </div>
        <div className="default">
          <Navbar />
        </div>
        <div className="presta-content">
          <h3 className="titre_second">Prestations et Tarifs</h3>
          <div className="contenu">
            <ZoomDiv>
              <h2 className="presta">« Famille » 220 euros</h2>
              <p className="description">
                <strong>
                  Pour la famille ou les amis jusqu’à 4 personnes, en extérieur
                  ou en studio 30 euros en supplément par personne au-delà de 4
                  (hormis enfant jusqu’à 2 ans)
                </strong>
              </p>
              <h2 className="presta">« Pour deux » 195 euros</h2>
              <p className="description">
                <strong>Pour deux personnes, en extérieur ou en studio</strong>
              </p>
              <h2 className="presta">« Il était une fois » 160 euros</h2>
              <p className="description">
                <strong>
                  Photo de grossesse (À votre domicile, en extérieur ou en
                  studio)
                </strong>
              </p>
              <h2 className="presta">« Juste moi » 130 euros</h2>
              <p className="description">
                <strong>
                  Séance pour une personne, en extérieur ou en studio
                </strong>
              </p>
              <h2 className="presta"> « Mon bébé » 100 euros</h2>
              <p className="description">
                <strong>Photo d’enfant jusqu’à 3 ans (photo à domicile)</strong>
              </p>
              <h2 className="presta">
                {" "}
                « J’immortalise l’événement » sur mesure
              </h2>
              <p className="description">
                <strong>Prestation de mariage ou baptême sur devis</strong>
              </p>
            </ZoomDiv>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
