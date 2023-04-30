import './gallery.css';
// import React, { useState } from 'react';
import GalleryModal from '../GalleryModal/modal';


const Gallery = () => {


    return (
        <>
        <section id="gallery-page">
            <GalleryModal />
            <button>Sign Out</button>
        </section>
        </>
    );

};

export default Gallery;