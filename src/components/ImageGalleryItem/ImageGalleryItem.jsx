import { Li,Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ src, alt, showBigImg ,id}) => {
  return (
    <Li>
      <Img src={src} alt={alt} onClick={()=>{showBigImg(id);}} />
    </Li>
  );
};