import { useState } from 'react';
import './App.css';
import './style.scss';
import { Modal } from './components/modal';

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

            {open && <Modal setOpen={setOpen} />}
        </div>
    );
}

export default App;
