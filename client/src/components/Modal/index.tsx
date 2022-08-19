import { useState } from "react"
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";
import HeaderModalWrapper from "./ModalPopup/HeaderModalWrapper";

interface ModalProps {
    buttonClass?: string;
    textButton: React.ReactNode
    titleHeader: string;
    bodyModal: JSX.Element;
}

export default function Modal({ buttonClass, textButton, titleHeader, bodyModal }: ModalProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible);
    }

    return (
        <>
            <button onClick={toggleModal} className={buttonClass}>{textButton}</button>

            <BaseModalWrapper onBackDropClick={toggleModal} isModalVisible={isModalVisible} headerModal={<HeaderModalWrapper titleHeader={titleHeader} toggleModal={toggleModal} />} bodyModal={bodyModal} />
        </>
    )
}