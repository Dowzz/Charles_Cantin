import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import $ from 'jquery'

const menuToggle =() =>{
    var menu= $(document.getElementsByClassName('hamburger'));
    menu.fadeToggle();
    

}

const Home = () => {

    return (
        <div className="home">
            <button className="responsive" onClick={menuToggle}><i className="fas fa-bars"></i></button>
            <div className="hamburger"><Navbar/></div>
            <div className="default"><Navbar/></div>
            <div className="homeContent">
                <div className="content">
                    <h1 className="titre" id="title">Charles Cantin 
                    <br />Photographe</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;