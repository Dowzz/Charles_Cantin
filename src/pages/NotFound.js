import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
             <img src="https://media.giphy.com/media/3osxY9kuM2NGUfvThe/giphy.gif" alt="404" />
            <div className="notFoundContent">
                <h3>Oooops, cette page n'existe pas !</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
            </div>        
        </div>
    );
};

export default NotFound;