import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({ id, title, cover }) {
    return (
        <Link to={`/housing/${id}`} className="card">
            <img src={cover} alt={title} className="card__img" />
            <h3 className="card__title">{title}</h3>
        </Link>
    );
}