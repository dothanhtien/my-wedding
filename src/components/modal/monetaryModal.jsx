import React from "react";
import styled from "styled-components";
import ModalComponent from "./common";

const ModalContainer = styled.div`
  padding: 50px 0;

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

const MonetaryModal = ({ show, onClose }) => {
  return (
    <ModalComponent show={show} onClose={onClose}>
      <ModalContainer>
        <img
          className="w-75"
          src="/my-wedding/assets/images/qr/loan.jpg"
          alt="monetary gift"
        />
      </ModalContainer>
    </ModalComponent>
  );
};

export default MonetaryModal;
