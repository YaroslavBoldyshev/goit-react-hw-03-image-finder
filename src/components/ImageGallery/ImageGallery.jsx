import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        {this.props.images.map((el) => (
          <ImageGalleryItem
            key={el.id}
            picture={el}
            openleModal={this.props.openleModal}
          />
        ))}
      </Gallery>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openleModal: PropTypes.func,
};

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
