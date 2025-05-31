import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

const ModalComponent = ({ show, onClose, children }) => {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current);

      const handleHidden = () => {
        if (typeof onClose === "function") {
          onClose();
        }
      };

      const modalNode = modalRef.current;
      modalNode.addEventListener("hidden.bs.modal", handleHidden);

      return () => {
        modalNode.removeEventListener("hidden.bs.modal", handleHidden);
      };
    }
  }, [onClose]);

  useEffect(() => {
    if (modalInstance.current) {
      show ? modalInstance.current.show() : modalInstance.current.hide();
    }
  }, [show]);

  return (
    <div className="modal fade" ref={modalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
