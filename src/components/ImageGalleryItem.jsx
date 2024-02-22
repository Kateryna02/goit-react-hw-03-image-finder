

import React from 'react';
import s from "../Style.module.css"

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={image.webformatURL}
        alt="Gallery item"
        onClick={openModal}
      />
    </li>
  );
};

export default ImageGalleryItem;








