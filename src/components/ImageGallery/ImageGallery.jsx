import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';


export const Gallery = ({ picturs, showBigImg }) => {
  return (
    <>
      <Ul>
        {picturs.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              showBigImg={showBigImg}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </Ul>
    </>
  );
};

Gallery.propTypes = {
  picturs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showBigImg:PropTypes.func.isRequired,
};
