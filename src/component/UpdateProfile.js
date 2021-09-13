import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import { Link, NavLink, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import $ from "jquery";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("les mots de passe ne correspondent pas");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("impossible de mettre a jour le compte");
      })
      .finally(() => {
        setLoading(false);
      });
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
      <div className="contenu-change">
        <h2 className="titre_second">Changer Identifiants</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <section id="email">
            <label>Email</label>
            <input
              type="email"
              ref={emailRef}
              defaultValue={currentUser.email}
            />
          </section>
          <section id="password">
            <label>Mot de passe</label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Laissez vide pour garder le mot de passe actuel"
            />
          </section>
          <section id="password-confirm">
            <label>Confirmation du Mot de passe</label>
            <input
              type="password"
              ref={passwordConfirmRef}
              placeholder="Laissez vide pour garder le mot de passe actuel"
            />
          </section>
          <button disabled={loading} className="connect-button" type="submit">
            Mettre a jour
          </button>
        </form>
        <button className="connect-button" id="cancel">
          <Link to="/dashboard">Annuler</Link>
        </button>
        <NavLink exact to="/">
          <button className="connect-button">Accueil</button>
        </NavLink>
      </div>
    </>
  );
}
