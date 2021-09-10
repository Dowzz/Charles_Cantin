import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function Signup() {
const emailRef= useRef()
const passwordRef=useRef()
const passwordConfirmRef=useRef()
const { signup } = useAuth()
const [error, setError] =useState('')
const [loading, setLoading] =useState(false)
const history = useHistory()

async function handleSubmit(event){
    event.preventDefault();
    if (passwordRef.current.value !==
        passwordConfirmRef.current.value){
            return setError('les mots de passe ne correspondent pas')
        }
    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/dashboard")
    }catch {
        setError('Impossible de créer un compte')
    }
    setLoading(false)
}
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Inscription</h2>
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
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmation du Mot de passe</Form.Label>
                        <Form.Control type="password"ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button disabled = {loading} className="w-100" type="submit">Inscription</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
            Deja un compte ? <Link to="/login"> connectez vous !</Link>
            </div>
            <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
        </Card> 
        </>
    )
}
