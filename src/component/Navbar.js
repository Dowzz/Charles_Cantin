import React from "react";
import { Link, NavLink } from "react-router-dom";
import useModal from "./UseModal";
import Modal from "./Modal";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthContext";
import $ from "jquery";

const menuToggle = () => {
  var menu = $(document.getElementsByClassName("hamburger"));
  menu.fadeToggle();
};

const Navbar = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const { currentUser } = useAuth();
  return (
    <>
      <div className="navbar overlayC">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span className="overlay" onClick={menuToggle}>
                Accueil
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Galerie" activeClassName="navActive">
              <span className="overlay" onClick={menuToggle}>
                Photos
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Prestations" activeClassName="navActive">
              <span className="overlay" onClick={menuToggle}>
                Tarifs
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Me_contacter" activeClassName="navActive">
              <span className="overlay" onClick={menuToggle}>
                Contact
              </span>
            </NavLink>
          </li>
          <li>
            {currentUser ? (
              <Link id="overlay" to="/dashboard" onClick={menuToggle}>
                Dashboard
              </Link>
            ) : (
              <div className="navActive">
                <a
                  href="#/"
                  rel="noopener noreferrer"
                  className="login overlay"
                  onClick={toggleLoginForm}
                >
                  Connexion
                </a>
              </div>
            )}
          </li>
          <li>
            <div className="social">
              <a
                href="/"
                className="overlay"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="/"
                className="overlay"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="App">
        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Login"
        >
          <Login></Login>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
