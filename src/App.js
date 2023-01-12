import "./App.css";
import styled from "styled-components";
import { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Loader } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import { Notify } from "notiflix/build/notiflix-notify-aio";

class App extends Component {
  state = {
    keyword: "",
    images: [],
    page: 1,
    modalSrc: "",
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.keyword === "") {
      return Notify.info("Please enter search request");
    }
    if (
      prevState.page !== this.state.page ||
      prevState.keyword !== this.state.keyword
    ) {
      this.setState({ status: "pending" });
      this.fetchImages(this.state.keyword, this.state.page);
    }
  }

  onSubmit = (keyword) => {
    this.setState({ keyword, page: 1, images: [], status: "idle" });
  };

  onLoadMore = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  fetchImages(keyword, page) {
    fetch(
      `https:pixabay.com/api/?key=22812338-89cc7af62214fe881f61e5605&q=${keyword}&image_type=photo&page=${page}&per_page=12`
    )
      .then((p) => p.json())
      .then((p) => {
        this.setState(
          (prevState) => {
            return {
              images: [...prevState.images, ...p.hits],
              status: "resolved",
            };
          },
          () => {
            if (this.state.images.length === 0) {
              this.setState({ status: "rejected" });
              Notify.info("Sorry we could find anything");
            }
          }
        );
        if (p.hits.length < 12) {
          this.setState({ status: "idle" });
        }
      })
      .catch((err) => {
        console.log(er);
        this.setState({ status: "rejected" });
      });
  }

  openleModal = (src) => {
    this.setState({ modalSrc: src });
  };

  closeModal = () => {
    this.setState({ modalSrc: "" });
  };

  render() {
    const { images, status, modalSrc } = this.state;
    return (
      <ImageFinder>
        <Searchbar onSubmit={this.onSubmit} />

        {status !== "rejected" && (
          <ImageGallery images={images} openleModal={this.openleModal} />
        )}

        {status === "pending" && <Loader />}

        {status === "resolved" && <Button onLoadMore={this.onLoadMore} />}

        {modalSrc && <Modal picture={modalSrc} closeModal={this.closeModal} />}
      </ImageFinder>
    );
  }
}
export default App;

const ImageFinder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
