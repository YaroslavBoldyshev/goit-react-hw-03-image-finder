import styled from "styled-components";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ picture, openleModal }) => {
  return (
    <Item>
      <Image
        onClick={() => {
          openleModal(picture.largeImageURL);
        }}
        src={picture.webformatURL}
        alt={picture.tags}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.object,
  openleModal: PropTypes.func,
};

const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
