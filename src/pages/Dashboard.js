import React, { useState } from "react";
import firebase from "../firebaseConfig";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, useHistory } from "react-router-dom";
import Navbar from "../component/Navbar";
import $ from "jquery";
import Read from "../component/Read";
import Uploader from "../component/Uploader";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};

export default function Dashboard() {
  const [name, setName] = useState("");
  const [categorie, setCategorie] = useState("");
  const [source, setSource] = useState(null);

  async function onFileChange(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const URL = await fileRef.getDownloadURL();
    setSource(URL);
  }

  const createPhoto = () => {
    const photosDB = firebase.database().ref("photoDB");
    const photo = {
      Name: name,
      Categorie: categorie,
      Source: source,
    };
    photosDB.push(photo);

    setName("");
    setCategorie("");
    setSource("");
  };

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Impossible de se déconnecter");
    }
  }
  return (
    <>
      <button className="responsive" onClick={menuToggle}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="hamburger">
        <Navbar />
      </div>
      <div className="default">
        <Navbar />
      </div>

      <div className="contenu-auth">
        <h2 className="titre_second">Profil</h2>
        {error && <alert variant="danger">{error}</alert>}
        <div id="emailuser">
          <div className="background">
            <strong>Email Utilisateur: </strong>
            {currentUser.email}
          </div>
        </div>
        <div className="create">
          <h4>Ajouter une photo</h4>
          <div className="form">
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              id="dropdown"
              name="Catégorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="">Choix catégorie</option>
              <option value="Mariage">Mariage</option>
              <option value="Grossesse">Grossesse</option>
              <option value="Bébé">Bébé</option>
              <option value="Famille">Famille</option>
              <option value="Bapteme">Bapteme</option>
              <option value="Couple">Couple</option>
              <option value="Portrait">Portrait</option>
            </select>
            <Uploader
              placeholder="Source"
              value={source}
              onChange={onFileChange}
            />
            <button onClick={createPhoto}>Ajouter</button>
          </div>
        </div>

        <Read />

        <div>
          <NavLink exact to="/">
            <span>Accueil</span>
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/update-profile" className="">
            <span>Mettre a jour le profil</span>
          </NavLink>
        </div>
        <button
          className="connect-button"
          varient="link"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    </>
  );
}
