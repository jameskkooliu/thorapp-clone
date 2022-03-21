import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';

const DownloadModal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	// useEffect(() => {

    //     console.log(onRequestClose)
	// 	function onKeyDown(event) {
	// 		if (event.keyCode === 27) {
	// 			// Close the modal when the Escape key is pressed
	// 			onRequestClose();
	// 		}
	// 	}

	// 	// Prevent scolling
	// 	document.body.style.overflow = "hidden";
	// 	document.addEventListener("keydown", onKeyDown);

	// 	// Clear things up when unmounting this component
	// 	return () => {
	// 		document.body.style.overflow = "visible";
	// 		document.removeEventListener("keydown", onKeyDown);
	// 	};
	// });

	return (
		<Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
	);
};

export default DownloadModal;