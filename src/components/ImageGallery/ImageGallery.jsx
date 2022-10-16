import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import {toast} from 'react-toastify'

export default class ImageGallery extends React.Component {
  state = {
    image: null,
    error: null,
    status: 'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      this.setState({ status:'pending'});

        fetch(
          `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=29688696-be7a3ad549ffca9d5a732b68f&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(
                new Error('Change your search query'));
          })
          .then(image => this.setState({ image, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }))

    }
  }


  render() {
    const {status, error, image} = this.state;

    if(status === 'idle') {
        return
    };

    if(status === 'pending') {
        return <Loader />
    }

    if(status === 'resolved') {
        return (<ImageGalleryList> <ImageGalleryItem imgSrc={image.pageURL} imgAlt={this.props.imgName}/>
        </ImageGalleryList>)
        
    }

    if(status === 'rejected') {
        return toast(error.message)
    }

  }
}
