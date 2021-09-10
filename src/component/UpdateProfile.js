import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function SUpdateProfile() {
const emailRef= useRef()
const passwordRef=useRef()
const passwordConfirmRef=useRef()
const { currentUser, updatePassword, updateEmail } = useAuth()
const [error, setError] =useState('')
const [loading, setLoading] =useState(false)
const history = useHistory()

function handleSubmit(event){
    event.preventDefault();
    if (passwordRef.current.value !==
        passwordConfirmRef.current.value){
            return setError('les mots de passe ne correspondent pas')
        }

        const promises = []
        setLoading(true)
        setError('')
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() =>{
            history.push("/dashboard")
        }).catch (() =>{
            setError('impossible de mettre a jour le compte')
        }).finally(()=>{
            setLoading(false)
        })
}
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Mise a jour du profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"ref={emailRef} defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password"ref={passwordRef} placeholder="Laissez vide pour garder le mot de passe actuel"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmation du Mot de passe</Form.Label>
                        <Form.Control type="password"ref={passwordConfirmRef} placeholder="Laissez vide pour garder le mot de passe actuel"/>
                    </Form.Group>
                    <Button disabled = {loading} className="w-100" type="submit">Mettre a jour</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                <Link to="/dashboard">Annuler</Link>
            </div>
            <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
        </Card> 
        </>
    )
}