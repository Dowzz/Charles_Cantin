import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="homeContent">
                <div className="content">
                    <h1 className="title">Charles Cantin 
                    <br />Photographe</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;