import { Li,Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ src, alt, showBigImg ,id}) => {
  return (
    <Li onClick={()=>{showBigImg(id)}}>
      <Img src={src} alt={alt}  />
    </Li>
  );
};