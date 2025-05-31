import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalContainer = styled.div`
  padding: 50px 0;
  text-align: center;

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

const MonetaryModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <ModalContainer>
          <img
            className="w-75"
            src="/my-wedding/assets/images/qr/loan.jpg"
            alt="monetary gift"
          />
        </ModalContainer>
      </Modal.Body>
    </Modal>
  );
};

export default MonetaryModal;
