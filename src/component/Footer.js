import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="social">
                        <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="signature">
                    <p>Dowzz BY DOM2A-2021</p>
                    </div>
                    <div className="login">
                        <a href="/" className="login">Connexion</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
