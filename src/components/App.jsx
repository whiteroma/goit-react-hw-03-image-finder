import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    imgName: '',
  };


  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  render() {
    const { imgName } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={imgName}/>
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
