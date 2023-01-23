// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal=(e)=> {
    // console.log(e.code);
    //   console.log(this.props.show);
    if (e.code === 'Escape') {
      this.props.show();
    }
  }


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
