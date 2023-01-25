import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchApi } from 'service';
import { Rings } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';
import { ButtonLoad } from './Button/Button';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    namePicture: '',
    pictures: [],
    loading: false,
    image: '',
    page: 1,
    hideButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { namePicture, page } = this.state;
    if (prevState.namePicture !== namePicture || prevState.page !== page) {
      this.getPictures();
    }

    if (prevState.namePicture !== namePicture && namePicture !== '') {
      this.setState({ page: 1, pictures: [], hideButton: false });
    }
  }

  getPictures = () => {
    const { namePicture, page } = this.state;
    this.setState({ loading: true });
    fetchApi(namePicture, page)
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }
        return Promise.reject(new Error('Sorry no image'));
      })
      .then(pictures => {
        console.log(pictures.hits.length);
        if (pictures.hits.length === 0) {
          this.createMassage();
        }
        if (pictures.hits.length < 12) {
          this.setState({ hideButton: true });
        }

        this.setState(prev => ({
          pictures: [...prev.pictures, ...pictures.hits],
        }));
      })

      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  createMassage = () => {
    Notiflix.Notify.info('Sorry no image');
  };

  valueFromInput = namePicture => {
    this.setState({ namePicture });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  getSrcToModal = largeImageURL => {
    this.setState({ image: largeImageURL });
  };

  toggleModal = () => {
    this.setState({ image: '' });
  };

  render() {
    const { pictures, loading, image, hideButton } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.valueFromInput} />
        {pictures && (
          <Gallery picturs={pictures} showBigImg={this.getSrcToModal} />
        )}{' '}
        {pictures.length !== 0 && hideButton === false && (
          <ButtonLoad clicked={this.onLoadMore} />
        )}
        {/* {pictures.length === 0 && Notiflix.Notify.info('Sorry no image')} */}
        {loading && <Rings />}
        {image && (
          <Modal show={this.toggleModal} src={image} alt="wonderful picture" />
        )}
      </div>
    );
  }
}
