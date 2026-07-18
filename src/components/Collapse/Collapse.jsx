import { useState } from 'react';
import './Collapse.scss';

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="collapse__title">{title}</h3>
                <span className={`collapse__arrow${isOpen ? ' collapse__arrow--open' : ''}`}>
                    ▼
                </span>
            </button>
            <div className={`collapse__body${isOpen ? ' collapse__body--open' : ''}`}>
                <p className="collapse__content">{content}</p>
            </div>
        </div>
    );
}