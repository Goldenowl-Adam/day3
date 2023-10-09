import { useState } from 'react';
import './App.css';
import './style.scss';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="container"
            onClick={() => {
                if (open) {
                    setOpen(false);
                }
            }}
        >
            {open && <div className="bg-inner"></div>}
            {!open && (
                <button
                    className="button__open-modal"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    Open modal
                </button>
            )}

            {open && (
                <div className="modal">
                    <div className="modal__header">
                        <h4>Welcome to Nodemy</h4>
                        <div
                            className="modal__header__button-close"
                            onClick={() => setOpen(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="modal__body">
                        <h2>Modal</h2>
                        <p>Đây là phàn body của Modal</p>
                    </div>
                    <div className="modal__button">
                        <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
