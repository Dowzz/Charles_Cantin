import React from 'react';
import Footer from '../component/Footer';
import PhotoList from '../component/gallery/PhotoList';
import Navbar from '../component/Navbar';

const Gallery = () => {
    return (
        <div>
           <Navbar/>
           <PhotoList></PhotoList>
           <Footer></Footer>
        </div>
    );
};

export default Gallery;