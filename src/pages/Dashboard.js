import React, {useState} from 'react'

import {useAuth} from'../contexts/AuthContext'
import {Link, NavLink, useHistory} from "react-router-dom"
import Navbar from '../component/Navbar'
import $ from 'jquery'



const menuToggle =() =>{
    var menu= $(document.getElementsByClassName('hamburger'));
    menu.fadeToggle();
}



export default function Dashboard() {
    
    const [error, setError] =useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try{
            await logout()
            history.push('/')

        } catch{
            setError('Impossible de se déconnecter')
        }

    }
    return (
        <>  
        
            <button className="responsive" onClick={menuToggle}><i className="fas fa-bars"></i></button>
            <div className="hamburger"><Navbar/></div>
            <div className="default"><Navbar/></div>

            <div className="contenu-auth">
                <h2 className="titre_second">Profil</h2>
                {error && <alert variant="danger">{error}</alert>}
                <div id="emailuser">
                    <div className="background">
                        <strong>Email Utilisateur: </strong> 
                        {currentUser.email}
                    </div>
                </div>
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
            <button className="connect-button" varient="link" onClick={handleLogout}>Déconnexion</button>
            </div>
  
            
        </>
    )
}
