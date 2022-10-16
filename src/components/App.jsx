import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
// import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';

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
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {/* {this.showModal && <Modal onClose={this.toggleModal} />} */}
        
        <React.StrictMode>
        <ToastContainer autoClose={3000} />
            </React.StrictMode>
      </Container>
    );
  }
}

export default App;
