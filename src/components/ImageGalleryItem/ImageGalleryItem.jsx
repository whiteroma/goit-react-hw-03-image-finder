import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryListItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';

export default class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    console.log('toggleModal');
  };

  render() {
    const { images, imgAlt } = this.props;
    const {showModal} = this.state;
    return (
      <ImageGalleryList>
        {images.map(({ webformatURL, id, largeImageURL }) => (
          <ImageGalleryListItem key={id} onClick={this.toggleModal}>
            <img src={webformatURL} alt={imgAlt} />
        {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src={largeImageURL} alt={imgAlt} />
              </Modal>
            )}
          </ImageGalleryListItem>
        ))}
      </ImageGalleryList>
    );
  }
}
