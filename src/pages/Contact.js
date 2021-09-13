import React from "react";
import Mail from "../component/Mail";
import Navbar from "../component/Navbar";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";
import CopyToClipboard from "react-copy-to-clipboard";
import $ from "jquery";
import Footer from "../component/Footer";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};

const zoomAnimation = keyframes`${zoomInDown}`;

const ZoomDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;

const Contact = () => {
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
      <div className="contact-content">
        <h3 className="titre_second">Me contacter</h3>
        <div className="contenu">
          <ZoomDiv>
            <h4 id="comms">
              Laissez moi toute demandes de devis ou commentaires
            </h4>
            <Mail />
            <div className="adress">
              <i className="fas fa-map-marker-alt"></i>
              <span>CAEN</span>
            </div>
            <div className="phone">
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0685613874">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06.85.61.38.74
                </span>
              </CopyToClipboard>
            </div>
          </ZoomDiv>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
