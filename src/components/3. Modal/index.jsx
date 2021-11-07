import React, { useState } from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";

ReactModal.setAppElement("#root");

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: "50vh" }}
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </motion.button>
      <div>
        <ReactModal
          isOpen={showModal}
          // Semua request (esc, click overlay, dll)
          onRequestClose={() => setShowModal(false)}
          // Apakah bisa ditutup dengan click overlay
          shouldCloseOnOverlayClick={false}
          // Inline Styling
          style={{
            overlay: {
              backgroundColor: "grey",
            },
            content: {
              color: "orange",
            },
          }}
        >
          <h2>Modal Title</h2>
          <p>Modal Body</p>
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </ReactModal>
      </div>
    </div>
  );
};

export default Modal;
