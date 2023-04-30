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
            <Button variant="primary" onClick={handleShow}>
                Add To Gallery
            </Button>

            <Modal show={show} onHide={handleClose} id="modal">
                <Modal.Header>
                    <h1>
                        Add a new piece to your collection
                    </h1>
                    <span class="close" onClick={handleClose}>&times;</span>
                </Modal.Header>

                <Modal.Body>
                    <input placeholder="Title" className="galleryAddInput"/>
                    <input placeholder="Title" className="galleryAddInput"/>
                    <input placeholder="Title" className="galleryAddInput"/>
                    <input placeholder="Title" className="galleryAddInput"/>
                    <textarea />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default GalleryModal;