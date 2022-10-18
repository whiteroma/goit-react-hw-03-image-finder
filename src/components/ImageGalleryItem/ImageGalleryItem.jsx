import React from 'react'
// import PropTypes from 'prop-types';
import { ImageGalleryListItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
    state = {
      showModal: false,
    }
    
    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    render() {
        const {webformatURL, largeImageURL, key, imgAlt} = this.props;
        return(
  <ImageGalleryListItem key={key} onClick={this.toggleModal}>
    <img src={webformatURL} alt={imgAlt} />
   {this.showModal && (
    <Modal onClose={this.toggleModal}>
      <img src={largeImageURL} alt={imgAlt} />
    </Modal>
  )}
  </ImageGalleryListItem>
)}
    }
export default ImageGalleryItem;
