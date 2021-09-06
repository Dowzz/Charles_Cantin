import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="sidebar">
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
                </ul>
             </div>
         </div>
    );
};

export default Navbar;