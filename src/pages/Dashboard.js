import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from'../contexts/AuthContext'
import {Link, NavLink, useHistory} from "react-router-dom"


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
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Mettre a jour le profil
                </Link>
            </Card.Body>
        <div className="w-100 text-center mt-2">
            <Button varient="link" onClick={handleLogout}>Déconnexion</Button>
            </div>
            <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>

        </Card>
            
        </>
    )
}
