import React from "react";
import ContainerModal from "./ContainerModal";

interface BaseModalWrapperProps {
    onBackDropClick: () => void;
    isModalVisible: boolean;
    headerModal: JSX.Element;
    bodyModal: JSX.Element;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackDropClick, isModalVisible, headerModal, bodyModal }) => {
    if (!isModalVisible) {
        return null;
    }
    return (
        <ContainerModal onBackDropClick={onBackDropClick}>
            <div className="w-10/12 h-modal bg-white mt-50 rounded" onClick={e => e.stopPropagation()}>
                {headerModal}
                {bodyModal}
            </div>
        </ContainerModal>
    )
}

export default BaseModalWrapper;