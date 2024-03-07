import { useState } from "react";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
      <style jsx>{`
        /* Define styles for the modal and its content */
        .modal {
          /* Modal styles: position, width, height, etc. */
        }
        .modal-content {
          /* Modal content styles: padding, background color, etc. */
        }
        .close {
          /* Close button styles */
        }
      `}</style>
    </div>
  );
};

export default Modal;
