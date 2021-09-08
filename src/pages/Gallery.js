import React from 'react';
import Selector from'../component/Selector';
import Footer from '../component/Footer';

import Navbar from '../component/Navbar';
import $ from 'jquery'

const menuToggle =() =>{
   var menu= $(document.getElementsByClassName('hamburger'));
   menu.fadeToggle();
    

}

const Gallery = () => {
    return (
        <div>
           <button className="responsive" onClick={menuToggle}><i className="fas fa-bars"></i></button>
            <div className="hamburger"><Navbar/></div>
            <div className="default"><Navbar/></div>
           <Selector/>
           <Footer/>
        </div>
    );
};
export default Gallery;