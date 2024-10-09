import { createPortal } from "react-dom";
import React from "react";
import { CloseButton, Content, Overlay } from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <Overlay>
      <Content>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.body,
  );
};

export default Modal;
