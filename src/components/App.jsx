import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    page: 1,
    items: [],
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({
      imgName: imgName,
      page: 1,
      items: [],
    });
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.imgName !== this.state.imgName) {console.log('111')
    }
  }

  render() {
    const { imgName, page } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={imgName} page={page} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
