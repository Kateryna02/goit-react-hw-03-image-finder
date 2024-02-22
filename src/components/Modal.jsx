

import React from 'react';
import * as basicLightbox from 'basiclightbox';

class Modal extends React.Component {
    componentDidMount() {
        document.body.style.overflowY = 'hidden';
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.body.style.overflowY = 'auto';
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };

    handleImageClick = () => {
        basicLightbox.create(`<img src="${this.props.largeImageURL}" alt="Large image">`).show();
        console.log(this.handleImageClick);
    };

    render() {
        return (
            <div className="modal-wrapper" onClick={this.handleBackdropClick}>
                <div className="modal-content">
                    <button className="close-button" onClick={this.props.closeModal}>×</button>
                    <img src={this.props.largeImageURL} alt="Large image" onClick={this.handleImageClick} />
                </div>
            </div>
        );
    }
}

export default Modal;




