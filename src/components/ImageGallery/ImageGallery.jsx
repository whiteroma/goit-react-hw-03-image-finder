// import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, imgAlt, }) => {
    return (
  <ImageGalleryList>
    {images.map(({ webformatURL, id, largeImageURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} imgAlt={imgAlt}/>
    ))}
  </ImageGalleryList>
)};

export default ImageGallery;
