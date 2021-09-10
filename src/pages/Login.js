import React, {useRef} from 'react'


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
           
                    <h2 className="titre">Connexion</h2>
                    {error && <alert variant="danger">{error}</alert>}
                    <form onSubmit={handleSubmit}>
                        <section id="email">
                            <label>Email</label>
                            <input type="email"ref={emailRef} required/>
                        </section>
                        <section id="password">
                            <label>Mot de passe</label>
                            <input type="password"ref={passwordRef} required/>
                        </section>
                        <button disabled = {loading} className="" type="submit">Connexion</button>
                    </form>
                    <div className="">
                        <Link to="/forgot-password">Oubli du mot de passe </Link>
                    </div>
            <NavLink exact to="/">
                    <i className=""></i>
                    <span>Accueil</span>
                </NavLink>
        
            </>
        )
}
