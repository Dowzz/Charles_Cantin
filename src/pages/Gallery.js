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

const toggle = () => {
  var menu = $(document.getElementsByClassName("radioDisplay2"));
  menu.fadeToggle();
};

const Gallery = () => {
  const [radios, setRadios] = useState("Portrait");
  const [photolist, setPhotolist] = useState([]);
  const Radiolist = [
    { id: 1, value: "Bapteme" },
    { id: 2, value: "Bébé" },
    { id: 3, value: "Couple" },
    { id: 4, value: "Famille" },
    { id: 5, value: "Grossesse" },
    { id: 6, value: "Mariage" },
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
      <div className="gallery-content">
        <h3 className="selection" onClick={toggle}>
          Filtre
        </h3>
        <div className="radioDisplay radioDisplayH">
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
        <div className="radioDisplay2 radioDisplayH">
          <ul className="categorie">
            {Radiolist.map((radio) => {
              return (
                <li onClick={toggle} key={radio.id}>
                  <input
                    type="radio"
                    name="radio"
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
        <div className="selector">
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
