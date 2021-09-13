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

const toggle = () => {
  var menu = $(document.getElementsByClassName("image"));
  menu.fadeToggle();
};

const photosDB = firebase.database().ref("photoDB");

export default function Dashboard() {
  const [name, setName] = useState("");
  const [categorie, setCategorie] = useState("");
  const [source, setSource] = useState("");
  const [isLoading, setIsloading] = useState(true);

  async function onFileChange(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setSource(await fileRef.getDownloadURL().then(setIsloading(false)));
  }

  async function createPhoto() {
    const photo = {
      Name: name,
      Categorie: categorie,
      Source: source,
    };
    photosDB.push(photo);

    setName("");
    setCategorie("");
    setSource("");
    setIsloading(true);
  }

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
        <div className="content">
          <div className="toolbar">
            <div className="background">
              <div className="emailuser">
                <h3>
                  <strong>Bienvenue </strong>
                  {currentUser.email}
                </h3>
              </div>
              <div className="bar">
                <NavLink exact to="/">
                  <button className="connect-button">Accueil</button>
                </NavLink>
                <NavLink exact to="/update-profile" className="">
                  <button className="connect-button">
                    Mettre a jour le profil
                  </button>
                </NavLink>
                <button className="connect-button" onClick={toggle}>
                  Masquer les image
                </button>
                <button className="connect-button" onClick={handleLogout}>
                  Déconnexion
                </button>
              </div>
              <div className="create">
                <div className="createtitle">
                  <h3>Ajouter une photo</h3>
                </div>
                <div className="form">
                  <input
                    type="text"
                    placeholder="Nom"
                    id="name"
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
                    className="upload"
                    placeholder="Source"
                    value={source}
                    onChange={onFileChange}
                  />
                  {isLoading ? null : (
                    <button className="add" onClick={createPhoto}>
                      Ajouter
                    </button>
                  )}
                </div>
              </div>
            </div>
            <Read />
          </div>
        </div>
      </div>
    </>
  );
}
