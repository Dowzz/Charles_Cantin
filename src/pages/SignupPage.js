import React from "react";
import Signup from "../component/Signup";
import {Container} from 'react-bootstrap'
import AuthProvider from "../contexts/AuthContext";

function LoginPage() {
    return (
        <AuthProvider>
            <Container
            className=""
            style={{minHeight: "100vh"}}
            >
                <div className="" style={{maxWidth :"25px"}}></div>
                <Signup />
            </Container>
        </AuthProvider>

    )
};

export default LoginPage