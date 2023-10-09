type ModalProps = {
    setOpen: (value: boolean) => void;
};

export function Modal({ setOpen }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal__header">
                <p>Welcome to Nodemy</p>
                <i
                    className="fa-solid fa-xmark"
                    onClick={() => setOpen(false)}
                ></i>
            </div>
            <div className="modal__body">
                <h2>Modal</h2>
                <p>Đây là phàn body của Modal</p>
            </div>
            <div className="modal__button">
                <button onClick={() => setOpen(false)}>Close</button>
            </div>
        </div>
    );
}
