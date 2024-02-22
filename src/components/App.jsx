


import React, { Component } from 'react';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import getImages from "./api";
import CustomLoader from "./Loader";
import LoadMoreButton from "./Button";
import Modal from "./Modal";

class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    isLoading: false,
    query: '',
    showModal: false,
    largeImageURL: '',
  };

  componentDidMount() {

    this.handleInitialLoad();
  }
  // componentDidUpdate(prevState) {
  //   if (prevState.images !== this.state.images) {

  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      const data = await this.fetchImages(this.state.query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        isLoading: false
      }));
    }
  }

  handleInitialLoad = async () => {
    this.setState({ isLoading: true });

    const data = await this.fetchImages();
    this.setState({ images: data, isLoading: false });
  };

  handleSearchSubmit = async (query) => {
    this.setState({ isLoading: true, query, images: [], page: 1 });


  };



  handleLoadMore = async () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: false
    }));
  };

  handleOpenModal = (largeImageURL) => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  fetchImages = async (query = '', page = 1) => {
    const data = await getImages(page, this.state.perPage, query);
    return data;
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} openModal={this.handleOpenModal} />
        {isLoading && <CustomLoader />}
        <LoadMoreButton onClick={this.handleLoadMore} />
        {showModal && <Modal largeImageURL={largeImageURL} closeModal={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;