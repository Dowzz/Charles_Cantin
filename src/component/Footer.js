import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="signature">
                    <p><a href="https://my-react-cv.herokuapp.com/"> Dowzz BY DOM2A-2021</a></p>
                    </div>
                    <div className="login">
                        <a href="/" className="login">Connexion</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
