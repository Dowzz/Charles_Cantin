import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useState } from 'react'
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef= useRef()
    const { resetPassword } = useAuth()
    const [error, setError] =useState('')
    const [message, setMessage] =useState('')
    const [loading, setLoading] =useState(false)

    
    async function handleSubmit(event){
        event.preventDefault();
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('verifiez votre boite mail pour les instructions')

        }catch {
            setError('Impossible de se réinitialiser le mot de passe')
        }
        setLoading(false)
    }
        return (
            <>
           <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled = {loading} className="w-100" type="submit">Réinitialisation du mot de passe</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Connexion</Link>
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