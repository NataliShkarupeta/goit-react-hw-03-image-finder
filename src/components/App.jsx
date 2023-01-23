import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoad } from './Button/Button';
import { Rings } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    showModals: true,
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?key=32192746-459981941dda650b5aa171a9f&q=${this.valueFromInput()}&per_page=40&page=1`
    );
  }

  valueFromInput = data => {
    const value = data;
    return value;
  };

  toggleModal =()=> {
    this.setState(prevState => ({ showModals: !prevState.showModals }));
  };

  render() {
    // const { showModals } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.valueFromInput} />
        <Gallery />
        <ButtonLoad />
        <Rings />
        {/* <Modal src='77777' alt='qwe' show={this.toggleModal} /> */}
        {this.state.showModals && (
          <Modal show={this.toggleModal} src="77777" alt="qwe" />
        )}
      </div>
    );
  }
}
