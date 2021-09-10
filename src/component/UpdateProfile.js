import React, {useRef} from 'react'
import { useState } from 'react/cjs/react.development'
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink, useHistory } from 'react-router-dom'


export default function UpdateProfile() {
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
        <div className="contenu-auth">
            <h2 className="titre_second">Mise a jour du profile</h2>
            {error && <alert variant="danger">{error}</alert>}
            <form onSubmit={handleSubmit}>
                <section id="email">
                    <label>Email</label>
                    <input type="email"ref={emailRef} defaultValue={currentUser.email}/>
                </section>
                <section id="password">
                    <label>Mot de passe</label>
                    <input type="password"ref={passwordRef} placeholder="Laissez vide pour garder le mot de passe actuel"/>
                </section>
                <section id="password-confirm">
                    <label>Confirmation du Mot de passe</label>
                    <input type="password"ref={passwordConfirmRef} placeholder="Laissez vide pour garder le mot de passe actuel"/>
                </section>
                <button disabled = {loading} className="connect-button" type="submit">Mettre a jour</button>
            </form>
            <div id="cancel">
                <Link to="/dashboard">Annuler</Link>
            </div>
            <NavLink exact to="/">
                    <span>Accueil</span>
            </NavLink> 
            </div>
        </>
    )
}