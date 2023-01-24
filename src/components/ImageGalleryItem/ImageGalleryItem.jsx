import { Li,Img } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, showBigImg, largeImageURL }) => {
  return (
    <Li
      onClick={() => {
        showBigImg(largeImageURL);
      }}
    >
      <Img src={src} alt={alt} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showBigImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};