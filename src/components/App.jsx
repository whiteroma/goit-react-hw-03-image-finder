import React from 'react';
import { Container } from './App.styled';
import Modal from './Modal/Modal';

class App extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <Container>
        {this.showModal && <Modal onClose={this.toggleModal} />}
      </Container>
    );
  }
}

export default App;
