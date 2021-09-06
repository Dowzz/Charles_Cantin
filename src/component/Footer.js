import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="Footer">
                    <ul>
                        <li>
                            <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="/" target="__blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
 
                        <a href="/" className="login">Connexion</a>

                    <div className="signature">
                    <p>Dowzz BY DOM2A-2021</p>
                    </div>
                </div>
            </div>
        )
    }
}
