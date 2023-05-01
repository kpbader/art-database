import './modal.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GalleryModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} size='sm' backdrop="static"
        keyboard={false} animation={true}>
                <Modal.Header>
                    <h1>
                        Add a new piece to your collection
                    </h1>
                    <span className="close" onClick={handleClose} style={{ fontSize: '22px'}}>&times;</span>
                </Modal.Header>

                <Modal.Body scrollable={true}>
                    <input placeholder="Title" className="galleryAddInput"/>
                    <input placeholder="Medium" className="galleryAddInput"/>
                    <input placeholder="Dimensions" className="galleryAddInput"/>
                    <input placeholder="Year" className="galleryAddInput"/>
                    <textarea placeholder="Other notes" className="galleryAddText"/>
                </Modal.Body>
                <Button id="upload-img-btn">Upload Images</Button>
                <Button id="stg-btn">Submit</Button>
            </Modal>

            <Button variant="primary" onClick={handleShow} id="addToGalleryBtn">
                Add To Gallery
            </Button>
        </>
    );
}

export default GalleryModal;