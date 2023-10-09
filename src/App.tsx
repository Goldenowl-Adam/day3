import { useState } from 'react';
import './App.css';
import './style.scss';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            {open && (
                <div
                    className="bg-inner "
                    onClick={() => {
                        if (open) {
                            setOpen(false);
                        }
                    }}
                ></div>
            )}
            {!open && (
                <button
                    className="button__open-modal"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    Open Modal
                </button>
            )}

            {open && (
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
            )}
        </div>
    );
}

export default App;
