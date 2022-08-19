import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    onBackDropClick: () => void;
    children: JSX.Element
}

const Modal: React.FC<ModalProps> = ({ onBackDropClick, children }) => {
    return ReactDOM.createPortal(
        /* Container Modal */
        <div className="flex fixed justify-center items-center w-full h-full top-0 left-0 bg-overlayModal" style={{zIndex: '9999'}} onClick={onBackDropClick}>
            {children}
        </div>, document.getElementById('modal-root')!)
}

export default Modal;