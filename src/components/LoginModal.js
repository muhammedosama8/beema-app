import React from 'react';
import Modal from 'react-modal';

const Login = ({isOpen, closeModal}) => {
    return (
        <Modal
        isOpen= {isOpen}
        onRequestClose={closeModal}
        className='Modal'
        contentLabel="Example Modal" >
            <button onClick={closeModal}>x</button>
        </Modal>
    );
}
 
export default Login;