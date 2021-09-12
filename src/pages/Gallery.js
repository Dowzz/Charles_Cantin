import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import firebase from "../firebaseConfig";
import Navbar from "../component/Navbar";
import $ from "jquery";
import ScrollUp from "../component/ScrollUp";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fading = keyframes`${fadeIn}`;

const Fadein = styled.div`
  animation: 3s ${fading};
`;

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};

const Gallery = () => {
  const [radios, setRadios] = useState("Couple");
  const [photolist, setPhotolist] = useState([]);
  const Radiolist = [
    { id: 1, value: "Mariage" },
    { id: 2, value: "Grossesse" },
    { id: 3, value: "Bébé" },
    { id: 4, value: "Famille" },
    { id: 5, value: "Bapteme" },
    { id: 6, value: "Couple" },
    { id: 7, value: "Portrait" },
  ];
  useEffect(() => {
    const photosDB = firebase.database().ref("photoDB");

    photosDB.on("value", (snapshot) => {
      let previewsList = snapshot.val();
      let list = [];
      for (let id in previewsList) {
        list.push({ id, ...previewsList[id] });
      }
      setPhotolist(list);
    });
  }, []);

  const handleChange = (e) => {
    setRadios(e.target.value);
    return { selectedRadio: radios };
  };

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
      <div className="content">
        <div className="selector">
          <h3 className="selection" onClick={menuToggle}>
            Filtre
          </h3>
          <div className="radioDisplay">
            <ul className="categorie">
              {Radiolist.map((radio) => {
                return (
                  <li key={radio.id}>
                    <input
                      type="radio"
                      name="radio"
                      checked={radio.value === radios}
                      value={radio.value}
                      id={radio.value}
                      onChange={handleChange}
                    />
                    <label htmlFor={radio.value}>{radio.value}</label>
                  </li>
                );
              })}
            </ul>
          </div>

          <ScrollUp />

          <div className="container-slider">
            {photolist &&
              photolist
                .filter((item) => item.Categorie.includes(radios))
                .map((item) => {
                  return (
                    <Fadein key={item.id}>
                      <div className="slide" key={item.id}>
                        <img src={item.Source} alt="" />
                        <div className="text">{item.Name}</div>
                      </div>
                    </Fadein>
                  );
                })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Gallery;
