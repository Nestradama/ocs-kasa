import './Rating.scss';

export default function Rating({ value }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map(star => (
                <span key={star} className={star <= value ? 'rating__star rating__star--filled' : 'rating__star'}>
                    ★
                </span>
            ))}
        </div>
    );
}