import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import {toast} from 'react-toastify'

class App extends React.Component {
  state = {
    image: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  handleFormSubmit = imgName => {
    console.log("~ handleFormSubmit");
    
    this.setState({
      imgName: imgName,
      page: 1,
      image: [],
    });
  };


  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {

    if (
      prevState.page !== this.state.page ||
      prevState.imgName !== this.state.imgName
    ) {
      console.log("~ componentDidUpdate");
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.state.imgName}&page=${this.state.page}&key=29688696-be7a3ad549ffca9d5a732b68f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('Change your search query'));
        })
        .then(image => this.setState(prevState => ({ image: [...prevState.image, image],
          status: 'resolved' })))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

 
  render() {
    const { status, error, image, imgName  } = this.state;

    if (status === 'idle') {
      return (<Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
      </Container>);
    }

    if (status === 'pending') {
      return (<Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Loader />
        </Container>);
    }

    if (status === 'resolved') {
      return (
      <Container>
      <SearchBar onSubmit={this.handleFormSubmit} />
          <ImageGallery images={image} imgAlt={imgName} />
          <Button onClick={this.loadMore} />
      </Container>
      );
    }

    if (status === 'rejected') {
      return toast(error.message);
    }
  }
  
}

export default App;
