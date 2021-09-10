import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="signature">
                    <a href="https://my-react-cv.herokuapp.com/"> Dowzz BY DOM2A-2021</a>
                    </div>
                    <div className="login">
                        <a href="/login" className="login">Connexion</a>
                    </div>
                </div>
            </div>
        )
    }
}
