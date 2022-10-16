import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
// import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = imgName => {
    this.setState({ ...imgName });
  };

  render() {
    const {imgName, showModal} = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {/* {this.showModal && <Modal onClose={this.toggleModal} />} */}
        {/* <ImageGallery imgName={imgName}/> */}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
