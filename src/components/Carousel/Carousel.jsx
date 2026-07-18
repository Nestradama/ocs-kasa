import { useState } from 'react';
import './Carousel.scss';

export default function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? pictures.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev === pictures.length - 1 ? 0 : prev + 1);
    };

    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt="" className="carousel__image" />

            {pictures.length > 1 && (
                <>
                    <button className="carousel__arrow carousel__arrow--left" onClick={goToPrevious}>
                        <img src="/arrow-left.png" alt="Précédent" />
                    </button>
                    <button className="carousel__arrow carousel__arrow--right" onClick={goToNext}>
                        <img src="/arrow-right.png" alt="Suivant" />
                    </button>
                    <p className="carousel__counter">{currentIndex + 1}/{pictures.length}</p>
                </>
            )}
        </div>
    );
}