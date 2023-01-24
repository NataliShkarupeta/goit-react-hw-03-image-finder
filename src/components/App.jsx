import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchApi } from 'service';
import { Rings } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';
import { ButtonLoad } from './Button/Button';

export class App extends Component {
  state = {
    namePicture: '',
    pictures: [],
    loading: false,
    image: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { namePicture, page } = this.state;
    if (prevState.namePicture !== namePicture || prevState.page !== page) {
      this.getPictures();
    }

    if(prevState.namePicture !== namePicture && namePicture!==''){
       this.setState({ page: 1, pictures: [] });
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
      .then(pictures =>
        this.setState(prev => ({
          pictures: [...prev.pictures, ...pictures.hits],
        }))
      )

      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  valueFromInput = namePicture => {
    this.setState({ namePicture });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  getSrcToModal = id => {
    const el = this.state.pictures.find(pic => pic.id === id);
    this.setState({ image: el });
    console.log(this.state.image);
  };

  toggleModal = () => {
    this.setState({ image: '' });
  };

  render() {
    const { pictures, loading, image } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.valueFromInput} />
        {pictures && (
          <Gallery picturs={pictures} showBigImg={this.getSrcToModal} />
        )}
        {pictures.length !== 0 && <ButtonLoad clicked={this.onLoadMore} />}
        {loading && <Rings />}

        {image && <Modal show={this.toggleModal} src={image.largeImageURL} />}
      </div>
    );
  }
}
