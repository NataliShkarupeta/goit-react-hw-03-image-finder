import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
// import { ButtonLoad } from 'components/Button/Button';


export const Gallery = ({ picturs, showBigImg }) => {
  // console.log(picturs);
  return (
    <>
      <Ul>
        {picturs.map(({ id, webformatURL, tags,  }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              showBigImg={showBigImg}
              id={id}
            />
          );
        })}
      </Ul>
   
    </>
  );
};
