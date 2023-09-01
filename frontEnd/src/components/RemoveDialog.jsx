import React, {useState, setShow } from 'react'
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RemoveDialog() {
     const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
     <>
            //this the button that triggers the modal
            <button onClick={handleShow}> Show Modal </button>

        

            <Modal className="my-modal" show={show} onHide={handleClose}>

                <Modal.Header closeButton className="mymodal-head">
                    <Modal.Title className="mymodal-title"><h4>The Modal</h4></Modal.Title>

                </Modal.Header>

                <Modal.Body className="mymodal-body">
                    Game Review
                    <input/>
                </Modal.Body>

                <Modal.Footer className="mymodal-footer">
//add your submit button here
                    <button> submit </button>
                </Modal.Footer>

            </Modal>


            
        </>
  );
}
