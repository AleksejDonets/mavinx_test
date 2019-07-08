import React from 'react';
import Modal from '@material-ui/core/Modal';
import './PopUp.css';

const PopUp = ({ message, open }) => (
  <Modal open={open}>
    <div className="register-popup-block">
      <span>{message}</span>
    </div>
  </Modal>
);

export default PopUp;