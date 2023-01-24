import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { Rings } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    namePicture: '',
    pictures: null,
    showModals: false,
    loading: false,
    error: '',
    image:'',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.namePicture !== this.state.namePicture) {
      this.setState({ loading: true, pictures: null });
      fetch(
        `https://pixabay.com/api/?key=32192746-459981941dda650b5aa171a9f&image_type=photo&orientation=horizontal&per_page=12&q=${this.state.namePicture}`
      )
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }
          return Promise.reject(new Error('Sorry no image'));
        })
        .then(pictures => this.setState({ pictures: pictures.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  valueFromInput = namePicture => {
    this.setState({ namePicture });
    // console.log(this.state.namePicture);
  };

  toggleModal = (id) => {
    this.setState(prevState => ({ showModals: !prevState.showModals }));
    const el = this.state.pictures.find(pic => pic.id === id);
   this.setState({ image: el });
   console.log(this.state.el.largeImageURL)
  };

// getDataImage(el){
//     this.setState({ image: el });
//     console.log(this.state.namePicture);
// }

  render() {
    const { pictures, loading, showModals } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.valueFromInput} />
        {pictures && (
          <Gallery picturs={pictures} showBigImg={this.toggleModal} />
        )}

        {loading && <Rings />}

        {showModals && (
          <Modal show={this.toggleModal} src />
        )}
      </div>
    );
  }
}
