interface HeaderModalProps {
    titleHeader: string;
    toggleModal: () => void;
}

export default function HeaderModalWrapper({ titleHeader, toggleModal }: HeaderModalProps) {
    return (
        <div className="flex flex-row justify-between items-center shadow-lg p-3">
            <h1 className="font-bold text-3xl">{titleHeader}</h1>
            <button onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}