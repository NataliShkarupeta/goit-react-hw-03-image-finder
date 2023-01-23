import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ picturs }) => {
  return (
    <ul>
      {picturs.map(({id,src,alt}) => {
       return (<ImageGalleryItem
          key={id}
          src={src}
          alt={alt}
        />)
      })}
    </ul>
  );
};
