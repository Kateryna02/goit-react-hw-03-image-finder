

import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import getImages from "./api";
export default class Gallery extends Component {
    state = {
        images: [],
        page: 1,
        perPage: 12
    };

    componentDidMount() {
        this.fetchImages();
    }
    

    fetchImages = () => {
        const { page, perPage } = this.state;
        getImages(page, perPage)
            .then(images => {
                this.setState({ images });
            })
    };

    render() {
        const { images } = this.state;

        console.log(this.state)
        console.log(images)
        return (
            <ul>
                {images.map(image => (
                    <ImageGalleryItem key={image.id} imageUrl={image.previewURL} />
                ))}
            </ul>
        );
    }
}

