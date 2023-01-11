import styled from "styled-components";
import { Component } from "react";
import PropTypes from "prop-types";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleClick);
  }

  handleClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <ModalContainer onClick={this.handleClick}>
        <ModalWindow>
          <img src={this.props.picture} alt="" />
        </ModalWindow>
      </ModalContainer>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  picture: PropTypes.string,
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
