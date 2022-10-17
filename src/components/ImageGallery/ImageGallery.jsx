import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

export default class ImageGallery extends React.Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.imgName !== this.props.imgName
    ) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=29688696-be7a3ad549ffca9d5a732b68f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('Change your search query'));
        })
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { status, error, image } = this.state;

    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryItem images={image.hits} imgAlt={this.props.imgName} />
          <Button onClick={this.loadMore} />
        </>
      );
    }

    if (status === 'rejected') {
      return toast(error.message);
    }
  }
}
