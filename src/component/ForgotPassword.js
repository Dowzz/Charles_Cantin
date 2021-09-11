import React, {useRef} from 'react'
import { useState } from 'react'
import {useAuth} from '../contexts/AuthContext'
import {  NavLink} from 'react-router-dom'



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
                <div className="contenu-auth">
                    <h2 className="titre_second">Reset du Pasword</h2>
                    {error && <alert variant="danger">{error}</alert>}
                    {message && <alert variant="success">{message}</alert>}
                    <form onSubmit={handleSubmit}>
                        <section id="email">
                            <label>Email</label>
                            <input type="email"ref={emailRef} required/>
                        </section>
                        <button className="connect-button" disabled = {loading} type="submit">Reset du  Password</button>
                    </form>
                    <NavLink exact to="/">
                        <span>Accueil</span>
                    </NavLink>
                </div>
            </>

        
            
        )
        }