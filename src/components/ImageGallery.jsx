

import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import s from "../Style.module.css";

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={s.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                key={image.id}
                    image={image}
                    openModal={() => openModal(image.largeImageURL)} 
                />
            ))}
        </ul>
    );
};

export default ImageGallery;




