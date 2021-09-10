import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useState } from 'react'
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef= useRef()
    const passwordRef=useRef()
    const { login } = useAuth()
    const [error, setError] =useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()
    
    async function handleSubmit(event){
        event.preventDefault();
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        }catch {
            setError('Impossible de se connecter')
        }
        setLoading(false)
    }
        return (
            <>
           <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Connexion</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password"ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled = {loading} className="w-100" type="submit">Connexion</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Oubli du mot de passe </Link>
                    </div>
                </Card.Body>
            <div className="w-100 text-center mt-2">
            Pas de compte ? <Link to="/signupPage">Inscrivez Vous !</Link>
            </div>
            <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
            </Card> 
            </>
        )
}
