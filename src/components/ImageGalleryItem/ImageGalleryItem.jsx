import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryListItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem ({imgSrc, imgAlt}) {
    return (
      <ImageGalleryListItem>
        <img src={imgSrc} alt={imgAlt} />
      </ImageGalleryListItem>
    );
}
