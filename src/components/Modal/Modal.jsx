import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import React from 'react';
import { ModalOverlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('handleKeyDown');
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      console.log('handleOverlayClick');
      this.props.onClose();
    }
  };



  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          {this.props.children}</ModalWindow>
      </ModalOverlay>,
      modalRoot
    )
  }
}

export default Modal;
