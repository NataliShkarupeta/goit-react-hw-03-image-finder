import PropTypes from 'prop-types';
import { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.show();
    }
  };

  render() {
    return (
      <Backdrop>
        <ModalContent>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalContent>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
