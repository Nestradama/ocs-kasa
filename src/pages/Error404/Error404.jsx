import { Link } from 'react-router-dom';
import './Error404.scss';

export default function Error404() {
    return (
        <div className="error404">
            <h1 className="error404__number">404</h1>
            <p className="error404__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error404__link">Retourner sur la page d'accueil</Link>
        </div>
    );
}