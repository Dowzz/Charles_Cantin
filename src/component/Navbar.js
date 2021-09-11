import React from 'react';
import { NavLink } from 'react-router-dom';
import useModal from "./UseModal"
import Modal from "./Modal";
import Login from '../pages/Login';


const Navbar = () => {
   const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  
    return (
        <>
        <div className="navbar">
                <ul>
                    <li><NavLink exact to="/"
                    activeClassName="navActive">
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li><NavLink exact to="/Galerie"
                    activeClassName="navActive">
                        <span>Photos</span>
                    </NavLink>
                    </li>
                    <li><NavLink exact to="/Prestations"
                    activeClassName="navActive">
                        <span>Tarifs</span>
                    </NavLink>
                    </li>
                    <li><NavLink exact to="/Me_contacter"
                    activeClassName="navActive">
                        <span>Contact</span>
                    </NavLink>
                    </li>
                    <li><div className="navActive">
                        <a href='#/' rel="noopener noreferrer" className="login" onClick={toggleLoginForm}>Connexion</a>
                    </div>
                    </li>
                    <li>
                    <div className="social">
                        <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
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